import { styled } from '@linaria/react';

export const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default Container;