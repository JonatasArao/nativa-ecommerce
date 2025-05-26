import React from 'react';
import { styled } from '@linaria/react';

const InfoBar = styled.header`
  padding: 0.2rem 0;
  & p {
    font-size: 0.8rem;
    color: #424242;
  }
  background-color: #FAFAFA;
`

const Footer : React.FC = () => {
  return (
    <InfoBar>
        <p>&copy; Nativa. Todos os direitos reservados.</p>
    </InfoBar>
  );
};

export default Footer;