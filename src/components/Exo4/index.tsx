import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';
import CardPoke from './CardPoke';
import Form4 from './Form4';

// API pokemon : https://pokebuildapi.fr/api/v1
// API limité à 10 pokemon: api/v1/pokemon/limit/10

interface ApiTypesProps {
  name: string
  image: string
}

interface PokeProps {
  name: string
  image: string
  apiTypes: ApiTypesProps[]
}
function Exo4() {
  const [pokemons, setPokemons] = useState<PokeProps[]>([]);
  const [textToSearch, setTextToSearch] = useState('');

  const handleSubmitSearch = (searchText: string) => {
    // Lorsque le formulaire est soumis, je vais appeler mon API avec axios
    // en lui passant la valeur de la recherche
    setTextToSearch(searchText);
  };

  const getPokemon = async () => {
    try {
      const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/10');
      console.log('response', response);
      if (response.status !== 200) {
        throw new Error();
      }
      setPokemons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*   useEffect(() => {
    getPokemon();
  }, []); */

  useEffect(() => {
    if (!textToSearch) {
      getPokemon();
    }
    const getPokemonType = async () => {
      try {
        const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/type/${textToSearch}`);
        console.log('response', response);
        if (response.status !== 200) {
          throw new Error();
        }
        setPokemons(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonType();
  }, [textToSearch]);

  return (
    <div className="exercice">
      <h2>
        Exo4 : [Pokedex] - Afficher les 10 premiers pokemons sous forme de carte,
        avec axios et api puis, mettre en place une recherche par type :
      </h2>
      <Form4 onSubmitSearch={handleSubmitSearch} />
      <div className="pokedex">
        {
          pokemons.map((pokemon) => (
            <CardPoke key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
}

export default Exo4;
