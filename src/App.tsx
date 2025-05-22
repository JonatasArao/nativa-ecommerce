import React from 'react';
import { css } from '@linaria/core';
import './App.css';
const header = css`
  & h1 {
    text-transform: uppercase;
  }
`;

const App: React.FC = () => {
  return (
    <>
    <header className={header}>
      <h1>Nativa</h1>
      <p>Um mini ecommerce.</p>
    </header>
    <main>
      <h2>Produtos</h2>
    </main>
    <footer>
      <p>&copy; Nativa. Todos os direitos reservados.</p>
    </footer>
    </>
  );
};

export default App;
