const bookService = require("../services/bookService"),
  reqExceptions = require("../exceptions/reqExceptions"),
  authMiddleware = require("../middlewares/authMiddleware");

exports.getBooks = async (req, res) => {
  try {
    const value = req.query.search || " ";
    getResult = await bookService.getBooks(value);

    if (getResult == " ") {
      throw new reqExceptions(
        "No exite un libro con los criterios ingresados",
        401
      );
    }
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createBook = async (req, res) => {
  try {
    const idBook = req.body;
    postResult = await bookService.createBook(idBook);
    if (!postResult) {
      throw new reqExceptions("Error al crear el Libro", 400);
    }
    res.status(200).send(postResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const idBook = req.params.libroId;
    deleteResult = await bookService.deleteBook(idBook);

    if (!deleteResult) {
      throw new reqExceptions("Error al elminar el Libro, este no existe", 400);
    }
    res.status(200).send(deleteResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findBook = async (req, res) => {
  try {
    const idBook = req.params.libroId;
    findResult = await bookService.findBook(idBook);

    if (!findResult) {
      throw new reqExceptions("El libro no existe", 400);
    }
    res.status(200).send(findResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateBook = async (req, res) => {
  const idBook = req.params.libroId;
  const data = req.body;

  try {
    let putResult = await bookService.updateBook(idBook, data);

    if (!putResult) {
      throw new reqExceptions(
        "No Se Actulizo el Libro debido a que no existe",
        400
      );
    }
    res.status(200).send(putResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addfavorite = async (req, res) => {
  const idBook = req.params.libroId,
    idUser = req.user;

  console.log(idBook);
  console.log(idUser);

  try {
    let addFavorite = await bookService.addFavorite(idBook, idUser);

    if (!addFavorite) {
      throw reqExceptions("Error al agregar el libro a Favoritos", 400);
    }
    res.status(200).send(addFavorite);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.rmfavorite = async (req, res) => {
  const idBook = req.params.libroId,
    idUser = req.user;

  try {
    let rmFavorite = await bookService.rmFavorite(idBook, idUser);

    if (!rmFavorite) {
      throw reqExceptions("Error al eliminar el libro de Favoritos", 400);
    }
    res.status(200).send(rmFavorite);
  } catch (err) {
    res.status(500).send(err);
  }
};
