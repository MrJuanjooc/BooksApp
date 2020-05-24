const bookController = require("../controllers/bookController"),
  authMiddleware = require("../middlewares/authMiddleware");

module.exports = (router) => {
  router
    .route("/libro")
    .get(bookController.getBooks)
    .post(bookController.createBook);

  router
    .route("/libro/:libroId")
    .delete(bookController.deleteBook)
    .get(bookController.findBook)
    .patch(bookController.updateBook);

  router
    .route("/libro/addfavorite/:libroId")
    .put(authMiddleware, bookController.addfavorite);

  router
    .route("/libro/rmfavorite/:libroId")
    .put(authMiddleware, bookController.rmfavorite);
};
