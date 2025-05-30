import React from 'react';
import { Product } from '@models';
import { formatCurrency } from '@utils';
import {
  AlertText,
  BodyText,
  CaptionText,
  DetailText,
  PreviousPrice,
  SalePrice
} from '@components/atoms'
import { 
  ProductCardBox,
  ProductDetails,
  PriceInfo,
  ImageWrapper,
  ProductImage,
  ProductInfo,
} from './product-card.styled';

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
	<ProductCardBox>
    <ImageWrapper>
	    <ProductImage src={imageUrl} alt={product.altText} loading='lazy' />
    </ImageWrapper>
    <ProductDetails>
      <ProductInfo>
        <CaptionText as="h3">{product.line.name}</CaptionText>
        <BodyText as="h4">{product.name}</BodyText>
        <DetailText>{product.variant}</DetailText>
      </ProductInfo>
      {product.isAvailable ? (
        <PriceInfo>
          {product.onSale && (
            <PreviousPrice>{originalPrice}</PreviousPrice>
          )}
          <SalePrice>{finalPrice}</SalePrice>
        </PriceInfo>
      ) : (
        <AlertText>produto esgotado</AlertText>
      )}
    </ProductDetails>
	</ProductCardBox>
  );
};

export default ProductCard;