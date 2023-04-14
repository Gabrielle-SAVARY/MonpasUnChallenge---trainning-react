import './styles.scss';
import { useState } from 'react';
import Form2 from './Form2';

function Exo2() {
  const [inputExo2, setInputExo2] = useState('');

  const [submit, setSubmit] = useState('');

  return (
    <div className="exercice">
      <h2>
        Exo2 : ton message apparait ici au onSubmit :
        {' '}
        {submit}
        {' '}
      </h2>
      <Form2 inputExo2={inputExo2} setInputExo2={setInputExo2} setSubmit={setSubmit} />
    </div>
  );
}

export default Exo2;
