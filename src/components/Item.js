import '../style/Item.css';


const Item = ({ data }) => {
  
    return (
      <div className="Item">
        <h2>Dados Enviados:</h2>
        <p>Nome: {data.nome}</p>
        <p>Valor: {parseFloat(data.valor).toFixed(2)}</p>
        <p>Tipo: {data.tipo}</p>
        <p>Pago por: {data.pago}</p>
      </div>
    );
  };
  
  export default Item;
