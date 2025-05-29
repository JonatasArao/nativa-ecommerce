import React from 'react';
import { Product } from '@models';
import { formatCurrency } from '@utils';
import { 
  Card,
  ProductDetails,
  PriceInfo,
  ImageWrapper,
  ProductImage,
  LineName,
  ProductName,
  ProductVariant,
  ProductInfo,
  OriginalPrice,
  SalePrice,
  UnavailableMessage
} from './product-card.styles';

interface ProductCardProps {
	product : Product;
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = `${import.meta.env.BASE_URL}/img/${product.id}.jpg`
  const originalPrice = formatCurrency(product.price, product.currency);
  const promoPrice = formatCurrency(product.promotionalPrice, product.currency)
  const finalPrice = product.onSale ?
                      promoPrice :
                      originalPrice;
  return (
	<Card>
    <ImageWrapper>
	    <ProductImage src={imageUrl} alt={product.altText} loading='lazy' />
    </ImageWrapper>
    <ProductDetails>
      <ProductInfo>
        <LineName>{product.line.name}</LineName>
        <ProductName>{product.name}</ProductName>
        <ProductVariant>{product.variant}</ProductVariant>
      </ProductInfo>
      {product.isAvailable ? (
        <PriceInfo>
          {product.onSale && (
            <OriginalPrice>{originalPrice}</OriginalPrice>
          )}
          <SalePrice>{finalPrice}</SalePrice>
        </PriceInfo>
      ) : (
        <UnavailableMessage>produto esgotado</UnavailableMessage>
      )}
    </ProductDetails>
	</Card>
  );
};

export default ProductCard;