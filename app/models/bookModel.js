const mongoose = require("mongoose");

let bookScheme = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
  },
  autor: {
    type: String,
  },
  imagen: {
    type: String,
  },
  categorias: [
    {
      type: String,
    },
  ],
});

mongoose.model("Book", bookScheme);
module.exports = mongoose.model("Book");
