const authController = require("../controllers/authController");

module.exports = (router) => {
  router.route("/auth/signin").post(authController.login);

  router.route("/auth/authentication").post(authController.authentication);

  router.route("/auth/signup").post(authController.signup);
};
