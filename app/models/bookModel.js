const mongoose = require("mongoose");

let bookScheme = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  autor: {
    type: String,
    require: true,
  },
  imagen: {
    type: String,
    require: true,
  },
});

mongoose.model("Book", bookScheme);
module.exports = mongoose.model("Book");
