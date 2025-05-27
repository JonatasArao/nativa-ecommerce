import { styled } from '@linaria/react';
import React from 'react';

const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 10rem;
  }
`

const NotFound: React.FC = () => {
  return (
    <NotFoundSection>
      <h2>404</h2>
    </NotFoundSection>
  );
};

export default NotFound;