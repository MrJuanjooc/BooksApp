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

exports.deleteUser = async (req, res) => {
  try {
    const idUser = req.params.id;
    deleteResult = await userService.deleteUser(idUser);

    if (!deleteResult) {
      res.status(404).send({ error: "Propietario No Encontrado" });
    } else {
      res.status(200).send(this.deleteUser);
    }
  } catch (error) {
    res.status(500).send(err);
  }
};
