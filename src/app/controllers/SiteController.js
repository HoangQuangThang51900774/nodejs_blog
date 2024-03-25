const Item = require('../models/Item');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Item.find({})
            .then((items) => {
                res.render('home', {
                    items: mutipleMongooseToObject(items),
                });
            })
            .catch(next);
        //res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
