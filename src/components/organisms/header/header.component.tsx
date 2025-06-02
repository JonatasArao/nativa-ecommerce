import React from 'react';
import { NavLink } from "react-router";
import { TopBar, logoLink, BrandArea, SearchArea, CartArea } from './header.styled';
import { Container } from '@components/atoms';
import { SearchForm, CartIndicator } from '@components/molecules';
import NativaLogo from '@static/svg/nativa.svg?react';

const Header : React.FC = () => {
  return (
    <TopBar>
      <Container>
        <BrandArea>
          <NavLink to="/" className={logoLink}>
            <NativaLogo />
            <h1 className='sr-only'>Nativa</h1>
          </NavLink>
        </BrandArea>
        <SearchArea>
          <SearchForm />
        </SearchArea>
        <CartArea>
          <CartIndicator />
        </CartArea>
      </Container>
    </TopBar>
  );
};

export default Header;