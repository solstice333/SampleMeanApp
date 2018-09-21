const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KittySchema = new Schema({
   name: { type: String, required: true },
   friendly: { type: Boolean, default: true },
   furry: { type: Boolean, default: true }
});

module.exports = mongoose.model('Kitty', KittySchema);
