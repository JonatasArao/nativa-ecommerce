import { styled } from "@linaria/react";

export const ProductListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 0;
  gap: 1rem;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;