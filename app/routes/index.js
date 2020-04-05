const userRouter = require("../routes/userRouter"),
  bookRouter = require("../routes/bookRouter");

module.exports = (router) => {
  userRouter(router), bookRouter(router);
};
