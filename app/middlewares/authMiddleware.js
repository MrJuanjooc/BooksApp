const jwt = require("jsonwebtoken"),
  config = require("../configs/config"),
  authException = require("../exceptions/notAuthException");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    throw new authException();
  }

  jwt.verify(token, config.SECRET, (err, decToken) => {
    if (err) {
      throw new authException();
    }
    req.user = decToken.username;
    
    next();
  });
};
