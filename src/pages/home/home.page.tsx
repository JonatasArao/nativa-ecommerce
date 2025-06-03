import React from 'react';
import { LineService, ProductService } from '@services';
import { Container, TitleText } from '@components/atoms';
import { BrandSummary } from '@components/molecules';
import { ProductList } from '@components/organisms';

const HomePage: React.FC = () => {
  const lines = LineService.getAll();
  return (
    <>
      <Container as="section">
        {lines.map(line => {
          let products = ProductService.getByLine(line.id);
          return (
          <div key={line.id}>
            <TitleText>{line.name}</TitleText>
            <ProductList products={products}/>
          </div>
        );
        })}
      </Container>
      <BrandSummary />
    </>
  );
};

export default HomePage;