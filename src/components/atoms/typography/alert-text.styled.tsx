import { styled } from '@linaria/react';

interface AlertTextProps {
    color?: string;
}

export const AlertText = styled.p<AlertTextProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.color || '#ef4444'};
  padding: 0.5rem 0;
  margin: 0;
`;

export default AlertText;