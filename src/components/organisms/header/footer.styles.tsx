import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const TopBar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0rem;
  background-color: #FFF;
  padding: 0.5rem 0;
  gap: 0.5rem;
  
  & > form input{
    width: 60vw;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    & > form input{
      width: 15rem;
    }
  }
`
export const logoLink = css`
  svg {
    width: 10em;
    height: auto;
    path {
      fill: #000;
    }
  }
`