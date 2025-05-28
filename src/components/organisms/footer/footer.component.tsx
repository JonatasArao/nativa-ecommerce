import React from 'react';
import { Container } from '@components/atoms';
import { InfoBar } from './footer.styles';

const Footer : React.FC = () => {
  return (
    <InfoBar>
      <Container>
        <p>&copy; Nativa. Todos os direitos reservados.</p>
      </Container>
    </InfoBar>
  );
};

export default Footer;