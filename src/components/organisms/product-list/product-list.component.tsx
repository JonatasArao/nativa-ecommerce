// src/components/organisms/product-list/product-list.component.tsx
import React from 'react';
import { Product } from '@models';
import { ProductCard } from '@components/organisms';
import { ProductListWrapper } from './product-list.styled'

interface ProductListProps {
  products: Product[];
  labelledBy?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, labelledBy }) => {
  const totalProducts = products.length;

  return (
    <ProductListWrapper aria-labelledby={labelledBy}>
      {products.map((product, index) => (
        <li
          key={product.id}
        >
          <ProductCard 
            product={product} 
            posInSet={index + 1}
            setSize={totalProducts}
          />
        </li>
      ))}
    </ProductListWrapper>
  );
}

export default ProductList;