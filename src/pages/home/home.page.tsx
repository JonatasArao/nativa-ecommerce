import React from 'react';
import { ProductCard } from '@components/molecules';
import { LineService, ProductService } from '@services';
import { productCardSection } from './home.styles';

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