import { Badge } from "@components/atoms";
import { styled } from "@linaria/react";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`
export const CurrentPriceLine = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  & ${Badge} {
    background-color: #047857;
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`