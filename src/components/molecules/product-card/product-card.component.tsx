import React from 'react';
import { Product } from '@models';
import { Card } from './product-card.styles'

interface ProductCardProps {
	product : Product;
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = `${import.meta.env.BASE_URL}/img/${product.id}.jpg`

  return (
	<Card>
	  <img src={imageUrl} alt={product.altText} loading='lazy' />
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