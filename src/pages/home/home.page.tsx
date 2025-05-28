import React from 'react';
import { ProductCard } from '@components/molecules';
import { LineService, ProductService } from '@services';
import { Container } from '@components/atoms';
import { productCardSection } from './home.styles';

const Home: React.FC = () => {
  const lines = LineService.getAll();
  return (
    <section>
      <Container>
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
      </Container>
    </section>
  );
};

export default Home;