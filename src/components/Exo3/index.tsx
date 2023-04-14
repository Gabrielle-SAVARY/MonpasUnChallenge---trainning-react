import { useState } from 'react';
import './styles.scss';

function Exo3() {
  const [isNight, setIsNight] = useState(false);

  return (
    <div className={isNight ? 'exercice nuit' : 'exercice'}>
      <h2>Exo3 : Lors du click sur le btn nuit, bg de l&apos;exo3 en black et text en white : </h2>
      {/*       <h2>Exo3 : Lors du click sur le btn nuit, bg de l'exo3 en black et text en white : </h2> */}
      <button type="button" className="btn" onClick={() => setIsNight(false)}>Jour</button>
      <button type="button" className="btn" onClick={() => setIsNight(true)}>Nuit</button>
    </div>
  );
}

export default Exo3;
