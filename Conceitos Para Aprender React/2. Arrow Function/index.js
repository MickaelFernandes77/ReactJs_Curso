

//  2 - Arrow Function
const upperName = (name) => {
    return name.toUpperCase();
  };
  
  // passando arrow function sem chave. Usado quando a função vai retornar apenas uma liinha.
  const upperName2 = (name) => name.toUpperCase();
  
  console.log(upperName("Mickael"));
  console.log(upperName2("Maroto"));
  
  class Menu {
    constructor(menu) {
      this.menuElement = document.querySelector(menu);
      this.activeClass = "active";
    }
    addActiveEvent() {
      // Usando a arrow function, ao usar o this, na função de callback, conseguimos pegar o elemento que está na classe construtora. Se usassemos uma função normal, não conseguiriamos usar o this, da classe construtora.
      // sem o arrow function ele não iria funcionar
      this.menuElement.addEventListener("click", (event) =>
        event.target.classList.add(this.activeClass)
      );
    }
  }
  