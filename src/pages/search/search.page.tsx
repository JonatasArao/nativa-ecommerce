import React from 'react';
import { useSearchParams } from 'react-router';
import { ProductService } from '@services';
import { BodyText, Container, TitleText, textAlign } from '@components/atoms';
import { ProductList } from '@components/organisms';

const Search: React.FC = () => {
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
  );
};

export default Search;