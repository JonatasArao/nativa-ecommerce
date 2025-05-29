import React from 'react';
import { LineService, ProductService } from '@services';
import { Container } from '@components/atoms';
import { ProductList } from '@components/organisms';
import { productsSection } from './home.styled';

const Home: React.FC = () => {
  const lines = LineService.getAll();
  return (
    <section>
      <Container>
        {lines.map(line => {
          let products = ProductService.getByLine(line.id);
          return (
          <div key={line.id} className={productsSection}>
            <h2>{line.name}</h2>
            <ProductList products={products}/>
          </div>
        );
        })}
      </Container>
    </section>
  );
};

export default Home;