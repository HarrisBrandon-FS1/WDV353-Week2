const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: String,
    type: String,
    dexNumber: Number,
});

module.exports = mongoose.model('Pokemon', pokeSchema);