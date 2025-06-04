import React from 'react';
import { Product } from '@models';
import {
  AlertText,
  BodyText,
  Button,
  CaptionText,
  DetailText
} from '@components/atoms';
import { CartButton, PriceDetails } from '@components/molecules';
import { 
  ProductCardBox,
  ProductDetails,
  ImageWrapper,
  ProductImage,
  ProductInfo
} from './product-card.styled';

interface ProductCardProps {
	product : Product;
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = `${import.meta.env.BASE_URL}/img/${product.id}.jpg`
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
        <PriceDetails product={product} />
      ) : (
        <AlertText>produto esgotado</AlertText>
      )}
    </ProductDetails>
    {product.isAvailable ? (
      <CartButton product={product} />
    ) : (
      <Button>me avise</Button>
    )}
	</ProductCardBox>
  );
};

export default ProductCard;