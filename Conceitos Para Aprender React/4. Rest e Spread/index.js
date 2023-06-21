// 4. Rest e Spread

// Rest: Permite você adicionar varios argumentos em um parametro. Para usar adicionar ... no param.
function showList(empresa, ...clientes) {
  console.log(empresa);
  console.log(clientes);
}

showList("Origamid", "Mickael", "Maria");

// Spread: Espalha os dados de um elemento. Para usar adicionar ... no elemento
const numeros = [1, 4, 9, 2, 3, 6, 20];
console.log(Math.max(...numeros)); // retorna 20

const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

// Recuperando propriedades do objeto carro com Spread
const cloneCarro = { ...carro };
console.log(cloneCarro);
