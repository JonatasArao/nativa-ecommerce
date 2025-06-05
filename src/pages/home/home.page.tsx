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
          const titleId = `line-title-${line.id}`;
          return (
            <div key={line.id}>
              <TitleText id={titleId}>
                <span className="sr-only"> Linha</span> {line.name}
              </TitleText>
              <ProductList products={products} labelledBy={titleId} />
            </div>
          );
        })}
      </Container>
      <BrandSummary />
    </>
  );
};

export default HomePage;