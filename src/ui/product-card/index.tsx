import React from 'react';
import { css } from '@linaria/core';
import { Product } from '../../models';

interface Props {
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

const ProductCard : React.FC<Props> = ({ product }) => {
  return (
	<div className={style}>
	  <img src={`img/${product.id}.jpg`} alt={product.description} />
	  <h3>{product.line.name}</h3>
	  <h4>{product.name}</h4>
	  <div>
		<span>{product.variant}</span>
	  </div>
	</div>
  );
};

export default ProductCard;