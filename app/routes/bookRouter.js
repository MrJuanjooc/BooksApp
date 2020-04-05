const bookController = require("../controllers/bookController");

module.exports = (router) => {
  router
    .route("/book")
    .get(bookController.getBooks)
    .post(bookController.createBook);
};
