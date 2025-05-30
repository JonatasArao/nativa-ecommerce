import { styled } from '@linaria/react';

interface BodyTextProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const BodyText = styled.p<BodyTextProps>`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 0;
  text-align: ${props => props.textAlign || 'left'};
`;

export default BodyText;