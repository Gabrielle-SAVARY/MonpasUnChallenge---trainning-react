import './styles.scss';

function Exo2() {
  return (
    <div className="exercice">
      <h2>Exo2 : ton message apparait ici au onSubmit : </h2>
      <form className="form">
        <label htmlFor="input-promo2">
          <input
            type="text"
            name="input-promo2"
            id="input-promo2"
            placeholder="Saississez votre message..."
          />
          <button className="button" type="submit">Envoyer</button>
        </label>
      </form>
    </div>
  );
}

export default Exo2;
