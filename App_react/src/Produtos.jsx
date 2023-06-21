import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'], preco: 2000 },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'], preco: 1500 },
  ];

  return (
    <section>
      {/* Uso do componente Titulo */}
      <Titulo texto="Produtos" />
      {/* percorrendo o array de produtos com Map. */}
      {produtos.map((produto) => (
        // Uso do componente Produto
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
