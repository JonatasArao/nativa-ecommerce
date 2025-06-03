import React from 'react';
import { Product } from '@models';
import { formatCurrency } from '@utils';
import {
  AlertText,
  BodyText,
  Button,
  CaptionText,
  DetailText,
  PreviousPrice,
  SalePrice
} from '@components/atoms';
import { CartButton } from '@components/molecules';
import { 
  ProductCardBox,
  ProductDetails,
  PriceInfo,
  ImageWrapper,
  ProductImage,
  ProductInfo
} from './product-card.styled';

interface ProductCardProps {
	product : Product;
}

const ProductCard : React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = `${import.meta.env.BASE_URL}/img/${product.id}.jpg`
  const currentPrice = product.onSale ?
                        product.promotionalPrice :
                        product.price;
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
            <PreviousPrice>
              {formatCurrency(product.price, product.currency)}
            </PreviousPrice>
          )}
          <SalePrice>
            {formatCurrency(currentPrice, product.currency)}
          </SalePrice>
        </PriceInfo>
      ) : (
        <AlertText>produto esgotado</AlertText>
      )}
    </ProductDetails>
    {product.isAvailable ? (
      <CartButton 
        product={product}
      />
    ) : (
      <Button>me avise</Button>
    )}
	</ProductCardBox>
  );
};

export default ProductCard;