const { default: mongoose } = require("mongoose");
const { ResponseMessage, ResponseCode } = require("../constants/response_code");
const BaseResponse = require("../interface/response.interfaces");
const admins = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const AuthController = {
    singin: async (req, res, next) => {
        // Lấy req body
        let body = req.body;

        // Lấy trong db bản ghi có username = body.username
        let user = await admins.findOne({ username: body.username });

        if (!user) {
            res.status(404).json(new BaseResponse(ResponseCode.USER_NOT_EXISTED, ResponseMessage.USER_NOT_EXISTED))
        }

        // Kiểm tra mật khẩu
        let passIndb = user.password;
        let pass = body.password;

        if (!bcrypt.compareSync(pass, passIndb)) {
            res.status(401).json(new BaseResponse(ResponseCode.UNAUTHORIZED, ResponseMessage.UNAUTHORIZED))
        }

        let token = AuthController.generateToken({ username: user.username, hashed: passIndb });
        res.json(new BaseResponse(ResponseCode.SUCCESSFUL, ResponseMessage.SUCCESSFUL, { token }))
    },
    generateToken: (data) => {
        try {
            return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRED_IN });
        } catch (error) {
            console.log(error);
            return '';

        }
    }
}

module.exports = AuthController;
