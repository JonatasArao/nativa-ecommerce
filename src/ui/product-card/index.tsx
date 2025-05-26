import React from 'react';
import { css } from '@linaria/core';
import { Product } from '../../models';

interface ProductCardProps {
	product : Product;
}

const style = css`
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
	<div className={style}>
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
	</div>
  );
};

export default ProductCard;