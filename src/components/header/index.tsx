import React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import Logo from '../../static/svg/nativa.svg?react';

const TopBar = styled.header`
  position: sticky;
  top: 0rem;
  background-color: #FFF;
`

const logoStyle = css`
  width: 10em;
  height: auto;
  path {
    fill: #000;
  }
`

const Header : React.FC = () => {
  return (
    <TopBar>
      <Logo className={logoStyle} />
      <h1>Nativa</h1>
      <form>
          <input name="query" type="text" title="Buscar" placeholder='O que está procurando hoje?'/>
          <button type="submit">Buscar</button>
      </form>
    </TopBar>
  );
};

export default Header;