import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchBar } from './search-form.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        title="Buscar"
        placeholder="O que está procurando hoje?"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" aria-label="Buscar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </SearchBar>
  );
};

export default SearchForm;