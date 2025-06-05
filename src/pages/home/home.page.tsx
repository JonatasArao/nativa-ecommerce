import React from 'react';
import { LineService, ProductService } from '@services';
import { Container, TitleText } from '@components/atoms';
import { BrandSummary } from '@components/molecules';
import { ProductList } from '@components/organisms';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  const lines = LineService.getAll();
  return (
    <>
      <Helmet>
        <title>Nativa Brasil - Beleza Natural e Sustentável</title>
        <meta name="description" content="Descubra as linhas de cosméticos naturais e veganos da Nativa. Produtos que realçam sua beleza com a essência da natureza brasileira." />
        <meta property="og:title" content="Nativa Brasil - Beleza Natural e Sustentável" />
        <meta property="og:description" content="Descubra as linhas de cosméticos naturais e veganos da Nativa. Produtos que realçam sua beleza com a essência da natureza brasileira." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${import.meta.env.BASE_URL}`} />
      </Helmet>
      <Container as="section">
        {lines.map(line => {
          let products = ProductService.getByLine(line.id);
          const titleId = `line-title-${line.id}`;
          return (
            <div key={line.id}>
              <TitleText id={titleId}>
                <span className="sr-only"> Linha</span> {line.name}
              </TitleText>
              <ProductList products={products} labelledBy={titleId} />
            </div>
          );
        })}
      </Container>
      <BrandSummary />
    </>
  );
};

export default HomePage;