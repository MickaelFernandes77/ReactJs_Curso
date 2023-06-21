// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// }

// ASYNC e Await: ele obriga o código a esperar o resultado.
// Async: mostra que uma função é assincrona e que o await vai ser usado na função
// Await: Await força a função a esperar o resultado da promise e vai retornar o valor da promise. O que evita o uso de vários .then e deixa o código mais simples.
// Observação: o await só é valido em funções async.
async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  console.log(response);
  console.log(jsonBody);
}

fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");
