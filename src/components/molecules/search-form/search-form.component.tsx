import React from 'react';
import { SearchBar } from './search-form.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm : React.FC = () => {
  return (
  <SearchBar>
      <input name="query" type="text" title="Buscar" placeholder='O que está procurando hoje?'/>
      <button type="submit" aria-label="Buscar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
  </SearchBar>
  );
};

export default SearchForm;