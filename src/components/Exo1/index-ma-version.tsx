import { useState } from 'react';
import './styles.scss';
import FormExo1 from './FormExo1';

function Exo1() {
  const [inputExo1, setInputExo1] = useState('');

  const handleChangeinputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // On récupère la valeur de notre input
    const newValue = event.target.value;
    // On met à jour notre variable d'état
    setInputExo1(newValue);
  };

  return (
    <div className="exercice">
      <h2>
        Exo1 : ton message apparait ici au onChange
        (si + de 6 caractères titre en rouge) :
        {inputExo1}
      </h2>
      <FormExo1 handleChangeinputValue={handleChangeinputValue} inputExo1={inputExo1} />

    </div>
  );
}

export default Exo1;
