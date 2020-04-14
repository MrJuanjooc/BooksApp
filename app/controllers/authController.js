const authService = require("../services/authService");

exports.login = async (req, res) => {
  const user = req.body.user,
    pass = req.body.pass;

  try {
    const token = await authService.authentication(user, pass);
    const response = { token: token };

    if (!response) {
      res.status(404).send({ error: "Id de Usuario no Encontrado" });
    }

    res.status(200).send(response);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};

exports.authentication = async (req, res) => {
  const token = req.body.token;

  try {
    const decodedToken = authService.valideToken(token);
    res.status(200).send(decodedToken);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.signup = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);

    if (!user) {
      return res
        .status(401)
        .send({ error: "El usuario no ha podido ser creado" });
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
};
