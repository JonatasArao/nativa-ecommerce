import React from 'react';
import { css } from '@linaria/core';
import { ProductCard } from '../../ui';
import { LineService, ProductService } from '../../services';

const productCardSection = css`
  h2 {
    text-align: center;
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (min-width: 768px) {
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1024px) {
    & > div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`

const Home: React.FC = () => {
  const lines = LineService.getAll();
  return (
    <section>
        {lines.map(line => {
          let products = ProductService.getByLine(line.id);
          return (
          <div key={line.id} className={productCardSection}>
            <h2>{line.name}</h2>
            <div>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
        })}
    </section>
  );
};

export default Home;