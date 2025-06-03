import { styled } from "@linaria/react";

export const ActionButton = styled.button`
  border: 1px solid #059669;
  background-color: #FFF;
  color: #000;
  padding: 0.65rem 0;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`

export default ActionButton;