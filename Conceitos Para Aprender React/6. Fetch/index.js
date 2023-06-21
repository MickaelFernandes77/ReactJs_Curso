// Fetch: Usamos para enviar requisições assíncronas para o servidor
// 1°: Quando usamos o fetch recebemos de retorno uma promise e para termos a resposta precisamos passar o then.
// 2°: Depois de obtermos a resposta devemos converter ela pra JSON.
// 3°:  E depois decidimos o que fazer com a resposta.
fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    console.log(jsonBody);
    document.getElementById("app").innerHTML = jsonBody[0].nome;
  });


const data = {
    id: "andrerafa",
    nome: "Andre",
    email: "qualquer@gmail.com"
}
//Usando o fetch para fazer um post
fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
