const userService = require("../services/userService"),
  reqExceptions = require("../exceptions/reqExceptions");

exports.getUser = async (user, res) => {
  try {
    getResult = await userService.getUsers(user);

    if (!getResult) {
      throw new reqExceptions("No existen usuarios para mostrar", 100);
    }
    res.status(200).send(getResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const idUser = req.params.id;
    deleteResult = await userService.deleteUser(idUser);

    if (!deleteResult) {
      throw new reqExceptions(
        "El usuario no fue eliminado debido a que no existe",
        406
      );
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findUser = async (req, res) => {
  try {
    const idUser = req.params.id;
    let findResult = await userService.findUser(idUser);

    if (!findResult) {
      throw new reqExceptions("El usuario no fue encontrado", 406);
    } else {
      res.status(200).send(findResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateUser = async (req, res) => {
  const idUser = req.params.id;
  const data = req.body;
  try {
    let putResult = await userService.updateUser(idUser, data);

    if (!putResult) {
      throw new reqExceptions(
        "El usuario no fue actualizado debido a que no existe",
        406
      );
    } else {
      res.status(200).send(putResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
