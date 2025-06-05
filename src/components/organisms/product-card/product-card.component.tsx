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
  posInSet?: number;
  setSize?: number;
}

const ProductCard : React.FC<ProductCardProps> = ({ product, posInSet, setSize }) => {
  const { id, name, altText, line, variant, isAvailable } = product;
  const imageUrl = `${import.meta.env.BASE_URL}/img/${id}.jpg`
  let productLabel = `${name}, ${variant}, da linha ${line.name}.`
  if (posInSet !== undefined && setSize !== undefined) {
    productLabel = `${posInSet} de ${setSize} opções. ${productLabel}`
  }
  return (
	<ProductCardBox>
    <ProductLink as={NavLink} to="/">
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
      <ImageWrapper>
        <span className="sr-only">Descrição da Embalagem: </span>
        <ProductImage src={imageUrl} alt={altText} loading='lazy' />
      </ImageWrapper>
    </ProductLink>
    {isAvailable ? (
      <CartButton product={product} />
    ) : (
      <Button aria-label={`me avise quando ${name} estiver disponível`}>me avise</Button>
    )}
	</ProductCardBox>
  );
};

export default ProductCard;