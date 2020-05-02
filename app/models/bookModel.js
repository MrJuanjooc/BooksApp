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
/*
{
	"nombre": 		"1984",
	"descripcion":	"En el año 1984 Londres es una ciudad lúgrube en la que la Policia del pensamiento...",
	"autor":	"George Orwell",
	"imagen": "1236",
	"categorias":	["Guerra, Política, Romance"]
}

{
	"nombre": 		"La culpa es de la Vaca",
	"descripcion":	"Libro de Enseñanza",
	"autor":	"Jaime Lopera Gutierrez y Marta Inés Bernal Trujillo",
	"imagen": "aaaaa",
	"categorias": ["Anécdotas, parábolas, fábulas y reflexiones sobre el liderazgo"]
}

{
	"nombre": 		"La semilla del Diablo",
	"descripcion":	"Libro de Terror y Suspenso",
	"autor":	"Ira Levin",
	"imagen": "1236",
	"categorias":	["Terror, Drama, Suspenso"]
}
*/
