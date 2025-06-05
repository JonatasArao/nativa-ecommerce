import React from 'react';
import { useSearchParams } from 'react-router';
import { ProductService } from '@services';
import { BodyText, Container, TitleText, textAlign } from '@components/atoms';
import { ProductList } from '@components/organisms';
import { Helmet } from 'react-helmet-async';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const products = query ? ProductService.searchQuery(query) : [];
  return (
    <>
      <Helmet>
          <title>{query ? `Resultados para "${query}"` : "Busca"} - Nativa Brasil</title>
          <meta name="description" content={query ? `Encontre produtos para "${query}" na Nativa Brasil.` : "Busque seus produtos favoritos na Nativa Cosméticos."} />
      </Helmet>
      <Container as="section">
        <TitleText>
          {query ? `Você buscou por "${query}"` : "Busca de Produtos"}
        </TitleText>
        {query ? (
          products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <BodyText className={textAlign.center}>
              Nenhum resultado encontrado para "{query}". Tente buscar por outros termos.
            </BodyText>
          )
        ) : (
          <BodyText className={textAlign.center}>
            Por favor, digite um termo no campo de busca.
          </BodyText>
        )}
      </Container>
    </>
  );
};

export default SearchPage;