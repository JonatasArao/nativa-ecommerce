import React from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import './App.css';
import Logo from './static/img/nativa.svg?react';
import product_img from "./services/img/P001.jpg"

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

const ProductCard = styled.div`
  background-color: #FAFAFA;
  width: 15em;
  
  & img {
    width: 100%;
  }
  & h3 {
    height: 1.25rem;
    font-size: 0.85rem;
    font-weight: 400;
    color: #424242;
    margin: 0;
  }
  & h4 {
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    margin: 0;
  }
  & span {
    height: 1.25rem;
    font-size: 0.9rem;
    margin: 0;
  }
`

const logoStyle = css`
  width: 10em;
  height: auto;
  path {
    fill: #000;
  }
`

const App: React.FC = () => {
  return (
    <>
    <Header>
      <Logo className={logoStyle} />
      <h1>Nativa</h1>
      <form>
          <input name="query" type="text" title="Buscar" placeholder='O que está procurando hoje?'/>
          <button type="submit">Buscar</button>
      </form>
    </Header>
    <main>
      <section>
        <h2>Produtos</h2>
        <ProductCard>
          <img src={product_img} alt="Embalagem do Hidratante Revitalizante com tons terrosos e elementos que remetem ao Buriti da Amazônia, e o logo da Nativa." />
          <h3>YVY</h3>
          <h4>Hidratante Revitalizante</h4>
          <div>
            <span>Polpa de Buriti da Amazônia</span>
          </div>
        </ProductCard>
      </section>
      <Footer>
        <p>&copy; Nativa. Todos os direitos reservados.</p>
      </Footer>
    </main>
    </>
  );
};

export default App;
