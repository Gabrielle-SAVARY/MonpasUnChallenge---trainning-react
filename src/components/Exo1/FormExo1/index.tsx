import './styles.scss';

interface FormExo1Props {
  inputExo1: string
  setInputExo1: (inputValue:string) => void
}

function FormExo1({ inputExo1, setInputExo1 }: FormExo1Props) {
  const handleChangeinput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*     setInputExo1(e.target.value); */
    const newValue1 = e.target.value;
    setInputExo1(newValue1);
  };
  return (
    <form className="form">
      <label htmlFor="input-promo">
        <input
          type="text"
          name="input-promo"
          id="input-promo"
          placeholder="Saississez votre message..."
          // input controlé en réaffectant le state
          value={inputExo1}
          onChange={(e) => handleChangeinput1(e)}
          // dessous possible mais MAJ directement l'input
          // faire une fonction permet de faire des verifications
/*           onChange={(e) => setInputExo1(e.target.value)} */
        />
      </label>
    </form>

  );
}

export default FormExo1;
