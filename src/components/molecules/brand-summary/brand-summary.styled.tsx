import { styled } from '@linaria/react';
import { Container, BodyText, TitleText } from '@components/atoms';

export const AboutSection = styled.section`
  padding-top: 4rem;
  background-color: #FFF;
  & ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    svg {
      width: 12em;
      height: auto;
    }
  }
  & ${TitleText} {
    padding: 0;
    font-weight: 500;
  }
  & ${BodyText} {
    max-width: 45rem;
    line-height: 2rem;
  }
`