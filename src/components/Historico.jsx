export default function Historico(props) {
      
    let conteudo = props.itens.map((item) => (
      <li>
        Comprimento: {item.comprimento}, Largura: {item.largura}
      </li>
    ));
  
    return <ul className="Historico">{conteudo}</ul>;
  }