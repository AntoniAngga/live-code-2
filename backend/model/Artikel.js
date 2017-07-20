const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arikelSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: String
}, {
    timestamps : true
});

let Artikel = mongoose.model('Artikels',arikelSchema);


module.exports = Artikel;