// Import: Usamos para importar uma função, objetos, etc de outro arquivo JS.
import { areaQuadrado, perimetroQuadrado } from "./quadarado.js";
// Quando uma importação for feita de uma exportação padrão, podemos dar o nome que quisermos para função que está sendo exportada.
import Circulo from "./numeroAleatorio.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(4));
// Usando as funções do objeto circulo
console.log(Circulo.numeroAleatorio());
console.log(Circulo.area(2));
