import React from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { ProductService } from './services';
import './App.css';
import Logo from './static/svg/nativa.svg?react';

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
    font-size: 0.85rem;
    font-weight: 400;
    color: #424242;
    margin: 0;
  }
  & h4 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    margin: 0;
  }
  & span {
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

const productCardSection = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
`

const App: React.FC = () => {
  const products = ProductService.getAll();
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
        <div className={productCardSection}>
          {products.map(produto => (
            <ProductCard key={produto.id}>
              <img src={`img/${produto.id}.jpg`} alt={produto.description} />
              <h3>{produto.line.name}</h3>
              <h4>{produto.name}</h4>
              <div>
                <span>{produto.variant}</span>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>
      <Footer>
        <p>&copy; Nativa. Todos os direitos reservados.</p>
      </Footer>
    </main>
    </>
  );
};

export default App;
