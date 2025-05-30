import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { Container } from '@components/atoms';

export const TopBar = styled.header`
  background-color: #FFF;
  position: sticky;
  top: 0rem;
  z-index: 1;
  padding: 0.75rem 0;
  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
   ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   }
  }
`
export const logoLink = css`
  svg {
    width: 9em;
    height: auto;
    path {
      fill: #000;
    }
  }
`