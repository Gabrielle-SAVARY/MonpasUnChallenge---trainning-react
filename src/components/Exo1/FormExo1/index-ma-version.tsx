import './styles.scss';

interface FormExo1Props {
  handleChangeinputValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputExo1: string
}

function FormExo1({ inputExo1, handleChangeinputValue }: FormExo1Props) {
  const handleChangeinputExo1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeinputValue(e);
  };
  return (
    <form className="form">
      <label htmlFor="input-promo">
        <input
          type="text"
          name="input-promo"
          id="input-promo"
          placeholder="Saississez votre message..."
          value={inputExo1}
          onChange={(e) => handleChangeinputExo1(e)}
        />
      </label>
    </form>

  );
}

export default FormExo1;
