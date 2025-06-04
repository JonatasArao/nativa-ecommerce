import React from 'react';
import { Container, MutedText } from '@components/atoms';
import { FooterRoot, InfoBar } from './footer.styled';
import NativaColor from '@static/svg/nativa_color.svg?react'

const Footer : React.FC = () => {
  return (
    <FooterRoot>
      <NativaColor role='img' aria-label='Logo da Nativa' />
      <InfoBar>
        <Container>
          <MutedText as="p">&copy; Nativa. Todos os direitos reservados.</MutedText>
        </Container>
      </InfoBar>
    </FooterRoot>
  );
};

export default Footer;