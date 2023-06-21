import React from "react";
import Titulo from "./Titulo";

const Home = () => {
  return (
    <section>
      {/* Uso do componente Titulo */}
      <Titulo texto="Home" />
      <p>Esse é o home da página.</p>
    </section>
  );
};

export default Home;
