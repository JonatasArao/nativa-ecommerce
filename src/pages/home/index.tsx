import React from 'react';
import { css } from '@linaria/core';
import { ProductCard } from '../../ui';
import { ProductService } from '../../services';

const productCardSection = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
`

const Home: React.FC = () => {
  const products = ProductService.getAll();
  return (
    <section>
      <h2>Produtos</h2>
      <div className={productCardSection}>
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export default Home;
