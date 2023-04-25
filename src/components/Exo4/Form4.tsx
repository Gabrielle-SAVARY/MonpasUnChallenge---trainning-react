import { useEffect, useState } from 'react';

import './styles.scss';

// API pokemon : https://pokebuildapi.fr/api/v1
// API limité à 10 pokemon: api/v1/pokemon/limit/10
interface Form4Props {
  onSubmitSearch: (searchText: string) => void;
}

function Form4({ onSubmitSearch }:Form4Props) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('searchText', searchText);
    onSubmitSearch(searchText);
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo4">
        <input
          type="text"
          name="input-promo4"
          id="input-promo4"
          placeholder="Saississez votre message..."
          onChange={handleChange}
        />
        <button className="button" type="submit">Envoyer</button>

      </label>
    </form>
  );
}

export default Form4;
