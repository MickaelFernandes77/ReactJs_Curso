import React from "react";
import Form from "./form/Form";

// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes.
// Esses são conhecidos como propriedades ou props.

// Uso das props:
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

// Uso das props com destruturação:
const Titulo2 = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

// Props Children: O children, é o conteúdo que vai dentro da tag do componente quando ela é aberta e fechada.
const App = () => {
  return (
    <React.Fragment>
      <Form />
    </React.Fragment>
  );
};

export default App;
