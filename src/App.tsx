import React from 'react';
import './App.css';
import { styled } from '@linaria/react';

const Header = styled.header`
  position: sticky;
  top: 0rem;
  background-color: #FFF;
`

const Footer = styled.footer`
  padding: 0.2rem 0;
  & p {
    font-size: 0.8rem;
    color: #424242;
  }
  background-color: #FAFAFA;
`

const App: React.FC = () => {
  return (
    <>
    <Header>
      <h1>Nativa</h1>
    </Header>
    <main>
      <h2>Produtos</h2>
      <Footer>
        <p>&copy; Nativa. Todos os direitos reservados.</p>
      </Footer>
    </main>
    </>
  );
};

export default App;
