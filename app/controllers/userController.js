const userService = require("../services/userService");

exports.getUser = async (user, res) => {
  try {
    getResult = await userService.getUsers(user);
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const idUser = req.body;
    postResult = await userService.createUser(idUser);
    res.status(200).send(postResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
