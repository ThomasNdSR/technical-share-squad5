class InvalidArgument extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "InvalidArgument";
    this.idErro = 1;
  }
}

export default InvalidArgument;
