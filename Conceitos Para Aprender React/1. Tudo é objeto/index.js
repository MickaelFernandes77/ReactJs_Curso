// 1 - Tudo é objeto:
// No objeto temos suas propriedades e métodos.
// Exemplo:

const menu = {
  class: "principal",
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
};

//uso do método do objeto.
menu.ativar();
