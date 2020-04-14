const bookService = require("../services/bookService");

exports.getBooks = async (book, res) => {
  try {
    getResult = await bookService.getBooks(book);
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createBook = async (req, res) => {
  try {
    const idBook = req.body;
    postResult = await bookService.createBook(idBook);
    res.status(200).send(postResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const idBook = req.params.id;
    deleteResult = await bookService.deleteBook(idBook);

    if (!deleteResult) {
      res
        .status(404)
        .send({ error: "Error al elminar el Libro, este no existe" });
    }
    res.status(200).send(deleteResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findBook = async (req, res) => {
  try {
    const idBook = req.params.id;
    findResult = await bookService.findBook(idBook);

    if (!findResult) {
      res.status(404).send({ error: "El libro no existe" });
    }
    res.status(200).send(findResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateBook = async (req, res) => {
  const idBook = req.params.id;
  const data = req.body;

  try {
    let putResult = await bookService.updateBook(idBook, data);

    if (!putResult) {
      res
        .status(404)
        .send({ error: "No Se Actulizo el Libro debido a que no existe" });
    }
    res.status(200).send(putResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
