import './styles.scss';

// API pokemon : https://pokebuildapi.fr/api/v1
function Exo4() {
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
    </div>
  );
}

export default Exo4;
