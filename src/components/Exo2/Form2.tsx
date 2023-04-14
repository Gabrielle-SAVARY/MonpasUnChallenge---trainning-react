import './styles.scss';

interface Form2Props {
  inputExo2: string
  setInputExo2: (inputValue:string) => void
  setSubmit: (inputValue:string) => void
}

function Form2({ inputExo2, setInputExo2, setSubmit }: Form2Props) {
  const handleChangeinput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*     setInputExo2(e.target.value); */
    const newValue2 = e.target.value;
    setInputExo2(newValue2);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(inputExo2);
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo2">
        <input
          type="text"
          name="input-promo2"
          id="input-promo2"
          placeholder="Saississez votre message..."
          value={inputExo2}
          onChange={(e) => handleChangeinput2(e)}
        />
        <button className="button" type="submit">Envoyer</button>
      </label>
    </form>

  );
}

export default Form2;
