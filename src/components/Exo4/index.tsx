import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';
import CardPoke from './CardPoke';

// API pokemon : https://pokebuildapi.fr/api/v1
// API limité à 10 pokemon: api/v1/pokemon/limit/10

interface PokeProps {
  name: string
  image: string
}
function Exo4() {
  const [pokemons, setPokemons] = useState<PokeProps[]>([]);

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

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="exercice">
      <h2>
        Exo4 : [Pokedex] - Afficher les 10 premiers pokemons sous forme de carte,
        avec axios et api puis, mettre en place une recherche par type :
      </h2>
      <form className="form">
        <label htmlFor="input-promo4">
          <input
            type="text"
            name="input-promo4"
            id="input-promo4"
            placeholder="Saississez votre message..."
          />
          <button className="button" type="submit">Envoyer</button>
        </label>
      </form>
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
