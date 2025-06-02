import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { Container } from '@components/atoms';

export const BrandArea = styled.div`
  grid-area: brand;
  margin-left: 4rem;
  justify-self: center;
  @media (min-width: 768px) {
    margin-left: 0;
    justify-self: start; 
  }
`;

export const SearchArea = styled.div`
  grid-area: search;
  justify-self: center;
  @media (min-width: 768px) {
    width: auto; 
    margin-right: 5rem;
  }
`;

export const CartArea = styled.div`
  grid-area: cart;
  justify-self: end;
`
export const TopBar = styled.header`
  background-color: #FFFFFF;
  position: sticky;
  top: 0rem;
  z-index: 10;
  padding: 0.75rem 0;

  ${Container} {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 4rem;
    grid-template-rows: auto auto;
    grid-template-areas:
      "brand cart"
      "search search";
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
   ${Container} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas:
      "brand search cart";
    gap: 1.5rem;
   }
  }
`;

export const logoLink = css`
  svg {
    width: 9rem;
    height: auto;
    path {
      fill: #000;
    }
  }
`;