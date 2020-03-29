const express = require("express"), //dependencia instalada
  app = express(),
  bodyParser = require("body-parser"), //dependencia instalada
  config = require("./app/configs/config.js"),
  router = express.Router(),
  routes = require("./app/routes/index.js"),
  mongoose = require("mongoose"), //dependencia instalada
  errorMiddleware = require("./app/middlewares/errorMiddleware.js"); //

require("express-async-errors"); //dependencia instalada

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
routes(router);
app.use("/api/v1", router);
app.use(errorMiddleware);

mongoose.connect(
  "mongodb://" + config.bd_ip + ":" + config.bd_port + "/" + config.bd_name,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  },

  err => {
    if (err) {
      console.log("Fallas al conectar, error: " + err);
    }
  }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Conexión Base de Datos"));

if (!db) {
  console.log("Error Durante la conexión con la Base de Datos");
} else {
  console.log("Conexión Exitosa a la Base de Datos");
}

app.listen(config.port, () => {
  console.log("Escuchando el puerto: " + config.port);
});
