import React from 'react';
import { NavLink } from "react-router";
import { TopBar, logoLink } from './header.styled'
import { Container } from '@components/atoms';
import { SearchForm } from '@components/molecules';
import NativaLogo from '@static/svg/nativa.svg?react';

const Header : React.FC = () => {
  return (
    <TopBar>
      <Container>
        <NavLink to="/" className={logoLink}>
          <NativaLogo />
          <h1 className='sr-only'>Nativa</h1>
        </NavLink>
        <SearchForm />
      </Container>
    </TopBar>
  );
};

export default Header;