const grupoA = 100;
const grupoB = 300;
// If Ternário:
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";
console.log(vencedor);

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);
console.log("Total: " + total);

// Uso do && para fazer a verificação da condição.
const active = true;
const button = active && "Botão está ativo";
