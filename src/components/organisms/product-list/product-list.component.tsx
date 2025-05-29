import React from 'react';
import { Product } from '@models';
import { ProductCard } from '@components/molecules';
import { ProductListWrapper } from './product-list.styled'

interface ProductListProps {
  products : Product[];
}

const ProductList : React.FC<ProductListProps> = ({products}) => {
  return (
    <ProductListWrapper>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListWrapper>
  );
}

export default ProductList;