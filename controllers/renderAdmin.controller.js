const Constan = require('../constants/constant')

const RenderController = {
    sigin: (req, res, next) => {
        try {
            res.render(Constan.viewVersion + '/sigin', {title: 'TRENDGLOBLE'})
        } catch (error) {
            console.log(error);
        }
    },
    home: (req, res, next) => {
        try {
            res.render(Constan.viewVersion + '/home', {title: 'TRENDGLOBLE'})
        } catch (error) {
            console.log(error);
        }
    }


}


module.exports = RenderController;