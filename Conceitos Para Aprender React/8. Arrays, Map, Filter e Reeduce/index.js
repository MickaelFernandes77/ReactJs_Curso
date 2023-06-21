const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

// Filter: O filtro retorna um array novo, filtrado de acordo com condição que passamos.
// Includes: verifica se contem um determinado texto ou numero no elemento.

const precoFiltro = precos.filter((preco) => preco.includes("R$"));
console.log(precoFiltro);

// Map: Retorna um array novo, modificado com o retorno de cada item do array.
const precoNumero = precoFiltro.map((preco) => Number(preco.replace("R$", "")));

console.log(precoNumero);

// Reduce: Retorna sempre um valor único, dependendo do que a ultima interação dele retornar.
const total = precoNumero.reduce((acumulador, atual) => acumulador + atual);
console.log(total);
