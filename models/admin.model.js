const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const Admin = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    createBy: String,
    createDate: String,
    updateBy: String,
    updateDate: String
});

Admin.pre('save', async function (next){

    try {
        let salt = Math.random();
        let encodePassword = await bcrypt.hash(this.password, salt);
        this.password = encodePassword;
        this.salt = salt;
    } catch (error) {
        
    }
})

const admins = mongoose.model('admins', Admin);
module.exports = admins;