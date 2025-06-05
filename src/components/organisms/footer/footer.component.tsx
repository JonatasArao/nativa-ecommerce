import React from 'react';
import { Container, MutedText } from '@components/atoms';
import { FooterRoot, InfoBar } from './footer.styled';
import NativaColor from '@static/svg/nativa_color.svg?react'

const Footer : React.FC = () => {
  return (
    <FooterRoot>
      <NativaColor role='img' aria-label='Logomarca Nativa: símbolo de três folhas verdes estilizadas ao lado da palavra NATIVA em verde escuro.' />
      <InfoBar>
        <Container>
          <MutedText as="p">&copy; Nativa. Todos os direitos reservados.</MutedText>
        </Container>
      </InfoBar>
    </FooterRoot>
  );
};

export default Footer;