import React from 'react';
import { styled } from '@linaria/react';
import { Product } from '../../models';

interface ProductCardProps {
	product : Product;
}

const Card = styled.div`
  background-color: #FAFAFA;
  width: 15em;
  
  & img {
    width: 100%;
  }
  & h3 {
    font-size: 0.85rem;
    font-weight: 400;
    color: #424242;
    margin: 0;
  }
  & h4 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    margin: 0;
  }
  & span {
    font-size: 0.9rem;
    margin: 0;
  }
`

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  return (
	<Card>
	  <img src={`img/${product.id}.jpg`} alt={product.altText} loading='lazy' />
	  <h3>{product.line.name}</h3>
	  <h4>{product.name}</h4>
	  <div>
		  <span>{product.variant}</span>
      <p>
        {
          new Intl.NumberFormat("pt-BR", { style: "currency", currency: product.currency})
            .format(product.price)
        }
      </p>
	  </div>
	</Card>
  );
};

export default ProductCard;