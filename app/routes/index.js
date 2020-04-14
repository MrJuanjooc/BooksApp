const userRouter = require("../routes/userRouter"),
  bookRouter = require("../routes/bookRouter"),
  authRouter = require("../routes/authRoute");

module.exports = (router) => {
  userRouter(router), bookRouter(router), authRouter(router);
};
