import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const TopBar = styled.header`
  background-color: #FFF;
  position: sticky;
  top: 0rem;
  z-index: 1;
  padding: 0.75rem 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  
    & > form input{
      width: 60vw;
    }
  }

  @media (min-width: 768px) {
   div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    & > form input{
      width: 80%;
    }
    & > form button{
      width: 20%;
    }
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