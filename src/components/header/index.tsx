import React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { NavLink } from "react-router";
import NativaLogo from '../../static/svg/nativa.svg?react';

const TopBar = styled.header`
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
const logoLink = css`
  svg {
    width: 10em;
    height: auto;
    path {
      fill: #000;
    }
  }
`

const Header : React.FC = () => {
  return (
    <TopBar>
      <NavLink to="/" className={logoLink}>
        <NativaLogo />
        <h1 className='sr-only'>Nativa</h1>
      </NavLink>
      <form>
          <input name="query" type="text" title="Buscar" placeholder='O que está procurando hoje?'/>
          <button type="submit">Buscar</button>
      </form>
    </TopBar>
  );
};

export default Header;