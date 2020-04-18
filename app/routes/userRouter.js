const userController = require("../controllers/userController"),
authMiddleware = require("../middlewares/authMiddleware");


module.exports = (router) => {
  router.route("/user").get(userController.getUser);

  router
    .route("/user/:id")
    .delete(userController.deleteUser)
    .get(userController.findUser)
    .put(userController.updateUser);
};
