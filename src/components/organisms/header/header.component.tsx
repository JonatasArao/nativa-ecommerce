import React from 'react';
import { NavLink } from "react-router";
import { TopBar, logoLink } from './footer.styles'
import NativaLogo from '@static/svg/nativa.svg?react';

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