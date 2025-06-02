import { styled } from "@linaria/react";
import { Badge } from '@components/atoms'

export const CartIcon = styled.div`
  justify-self: end;
  & a {
    position: relative;
    display: flex;
    border-radius: 1.5rem;
    padding: 0.4rem 1rem;
  }
  & a:hover {
    background-color: #d4d4d4;
  }
  svg {
    height: 1.5rem;
    color: #000;
  }
  ${Badge} {
    right: 0.1rem;
    bottom: -0.5rem;
  }
`