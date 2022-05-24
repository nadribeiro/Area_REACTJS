import { useEffect, useState } from 'react';
import Resultado from './Resultado';

export default function Form(props) {
  const [area, setArea] = useState(0);
  const [comprimento, setComprimento] = useState(props.comprimento);
  const [largura, setLargura] = useState(props.largura);

  console.log(props);

  useEffect(() => {
    setArea(0);
  }, [comprimento, largura]);

  const calcular = (e) => {
    e.preventDefault();
    const res = (comprimento * largura);
    setArea(res);
    props.onCalcArea(comprimento, largura, res);
  };
  

  return (
    <>
      <form onSubmit={calcular}>
        <div className="form-control">
          <label htmlFor="comprimento">Comprimento</label>
          <input type="text" id="comprimento" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="largura">Largura</label>
          <input type="text" id="largura" value={largura} onChange={(e) => setLargura(e.target.value)} />
        </div>
        <div className="form-buttons">
          <button type="submit">Calcular</button>
        </div>
      </form>

      <Resultado area={area} />
    </>
  );
}