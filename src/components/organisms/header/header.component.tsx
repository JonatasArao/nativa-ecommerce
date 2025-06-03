import React from 'react';
import { NavLink, useLocation } from "react-router";
import { TopBar, logoLink, BrandArea, SearchArea, CartArea } from './header.styled';
import { Container } from '@components/atoms';
import { SearchForm, CartIndicator } from '@components/molecules';
import NativaLogo from '@static/svg/nativa.svg?react';

const Header : React.FC = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const HeadingTag = isHomePage ? 'h1' : 'p';
  return (
    <TopBar>
      <Container>
        <BrandArea>
          <NavLink to="/" className={logoLink}>
            <NativaLogo />
            <HeadingTag className='sr-only'>Nativa</HeadingTag>
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