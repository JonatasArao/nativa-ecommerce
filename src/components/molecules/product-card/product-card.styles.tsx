import { styled } from '@linaria/react';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0.4rem 0.2rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const ImageWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  
  &:hover{
    transform: scale(1.1);
  }
`

export const LineName = styled.h3`
  font-size: 0.85rem;
  font-weight: 400;
  color: #737373;
  margin: 0;
`

export const ProductName = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 0;
`

export const ProductVariant = styled.span`
  font-size: 0.8rem;
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #757575;
  font-size: 0.9rem;
`;

export const SalePrice = styled.span`
  font-weight: 500;
`;

export const UnavailableMessage = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #ef4444;
  padding: .5rem 0;
`;