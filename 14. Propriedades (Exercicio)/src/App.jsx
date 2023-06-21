import React from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Produtos from "./Produtos.jsx";

const App = () => {
  let Pagina;
  // Pathname: é o caminho da url. Podemos passar uma /, ou outro caminho desejado.
  // Nesse exemplo, ao estamos usando para captar a mudança na url ao clicarmos nos links do header.
  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <React.Fragment>
      {/* Uso do componente Header */}
      <Header />
      {/* uso do componente pagina, que recebe o componente de produto ou de home */}
      <Pagina />
    </React.Fragment>
  );
};

export default App;
