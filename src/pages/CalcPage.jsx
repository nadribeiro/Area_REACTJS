import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Historico from "../components/Historico";
import { useState } from "react";

export default function CalcPage({ titulo }) {
  const [historico, setHistorico] = useState([]);

  const addHistorico = (comprimento, largura) => {
    setHistorico([
      ...historico,
      {
        comprimento: comprimento,
        largura: largura,
      },
    ]);
  };

  return (
    <div className="CalcPage">
      <PageTitle title={titulo} />
      <div className="linha">
        <div className="coluna">
          <Form comprimento="5" largura="3.5" onCalcAREA={addHistorico} />
        </div>
        <div className="coluna">
          <Historico itens={historico} />
        </div>
      </div>
    </div>
  );
}