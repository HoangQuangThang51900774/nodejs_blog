const Item = require('../models/Item');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    // [GET] /product
    listProduct(req, res, next) {
        var a = 1
        var b = 2
        var c = a + b
        Item.find({})
            .then((items) => {
                res.render('home', {
                    items: mutipleMongooseToObject(items),
                });
            })
            .catch(next);
    }

    //[GET] /product/:slug
    show(req, res, next) {
        Item.findOne({ slug: req.params.slug })
            .then((item) => {
                res.render('items/show', { item: mongooseToObject(item) });
                //res.json(hello);
            })
            .catch(next);
    }
}

module.exports = new ProductController();
