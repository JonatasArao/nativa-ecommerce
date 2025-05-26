import React from 'react';
import './AppStyle.tsx';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { ProductService } from './services';
import { ProductCard } from './ui';
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
          {products.map(product => (
            <ProductCard product={product} key={product.id}/>
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
