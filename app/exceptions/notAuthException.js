class notAuthException extends Error {
  constructor() {
    super("Usuario No Tiene Autorizacion");
    this.status = 401;
  }
}

module.exports = notAuthException;
