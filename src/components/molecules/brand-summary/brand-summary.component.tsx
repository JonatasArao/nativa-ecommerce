import React from 'react';
import { Container, TitleText, BodyText } from '@components/atoms';
import { AboutSection } from './brand-summary.styled';

const BrandSummary : React.FC = () => {
  return (
      <AboutSection>
        <Container>
          <h2 className="sr-only">Quem Somos</h2>
          <BodyText>
            Acreditamos que o verdadeiro bem-estar floresce do que é puro e fundamental, porque a beleza é <strong>essência em seu bem</strong>. Nossa <strong>missão</strong> é criar produtos de alta qualidade que conectem você com a rica alma da natureza brasileira, transformando o autocuidado em um ritual de reconexão e celebração da sua beleza autêntica. Almejamos ser uma marca reconhecida pela nossa transparência e profundo respeito pelo meio ambiente, inspirando um estilo de vida mais consciente e equilibrado. Guiados pela <strong>autenticidade</strong>, pelo <strong>bem-estar integral</strong> e pela <strong>sofisticação na simplicidade</strong>, nossa <strong>essência</strong> é buscar em nossas raízes o cuidado mais puro para nutrir não apenas a pele, mas a alma.
          </BodyText>
          <TitleText as ="p">
            Nós Somos <span className="sr-only">Nativa</span>
          </TitleText>
        </Container>
      </AboutSection>
  );
};

export default BrandSummary;