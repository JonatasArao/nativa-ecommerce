import React from 'react';
import { useSearchParams } from 'react-router';
import { ProductService } from '@services';
import { BodyText, Container, TitleText, textAlignCenter } from '@components/atoms';
import { ProductList } from '@components/organisms';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('busca');
  const products = query ? ProductService.searchQuery(query) : [];
  return (
    <Container as="section">
      <TitleText>
        {query ? `Você buscou por "${query}"` : "Busca de Produtos"}
      </TitleText>
       {query ? (
        products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <BodyText className={textAlignCenter}>
            Nenhum resultado encontrado para "{query}". Tente buscar por outros termos.
          </BodyText>
        )
      ) : (
        <BodyText className={textAlignCenter}>
          Por favor, digite um termo no campo de busca.
        </BodyText>
      )}
    </Container>
  );
};

export default SearchResults;