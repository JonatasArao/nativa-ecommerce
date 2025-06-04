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
  ProductInfo,
  ProductLink
} from './product-card.styled';
import { NavLink } from 'react-router';

interface ProductCardProps {
	product : Product;
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, altText, line, variant, isAvailable } = product;
  const imageUrl = `${import.meta.env.BASE_URL}/img/${id}.jpg`
  const productLabel = `${name} com ${variant}, da linha ${line.name}.`
  return (
	<ProductCardBox>
    <ProductLink as={NavLink} to="/">
      <ImageWrapper>
        <ProductImage src={imageUrl} alt={altText} loading='lazy' />
      </ImageWrapper>
      <ProductDetails>
        <ProductInfo aria-label={productLabel}>
          <CaptionText as="h3" aria-hidden="true">
            {line.name}
          </CaptionText>
          <BodyText as="h4" aria-hidden="true">{name}</BodyText>
          <DetailText aria-hidden="true">{variant}</DetailText>
        </ProductInfo>
        {isAvailable ? (
          <PriceDetails product={product} />
        ) : (
          <AlertText>produto esgotado</AlertText>
        )}
      </ProductDetails>
    </ProductLink>
    {isAvailable ? (
      <CartButton product={product} />
    ) : (
      <Button>me avise</Button>
    )}
	</ProductCardBox>
  );
};

export default ProductCard;