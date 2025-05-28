import { css } from '@linaria/core';

export const productCardSection = css`
  h2 {
    text-align: center;
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (min-width: 768px) {
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1024px) {
    & > div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`