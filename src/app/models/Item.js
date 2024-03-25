const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    name: { type: String, defaut: 'Item' },
    description: { type: String },
    img: { type: String },
    rate: { type: String },
    sold: { type: String },
    price: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', Item);
