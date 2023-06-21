// 3 - Destructring
// Desestruturação é pegar um valor e transferir ele para outro.

function handleMouseMove(event) {
  // Desestruturação
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// Também é possível desestruturar direto na função como parametro
// function handleMouseMove({ clientX, clientY }) {
//   console.log(clientX, clientY);
// }

// document.documentElement.addEventListener("mousemove", handleMouseMove);

// Também é possível desestruturar arrays
const frutas = ["Banana", "Uva"];

// Desestruturação
const [fruta1, fruta2] = frutas;

console.log(fruta1);
console.log(fruta2);



