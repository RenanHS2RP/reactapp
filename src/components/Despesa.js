import '../style/Despesa.css'
import Item from './Item';

const Despesa = ({ itens }) => {
  const valorTotalDespesa = itens
  .filter(item => item.tipo === 'Despesa')
  .reduce((total, item) => total + Number(item.valor), 0);

  const valorFormatadoDesp = valorTotalDespesa.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <div className="Despesa">
      <p>Despesa</p>
      <p>Valor total: {valorFormatadoDesp}</p>
      <div className='DesItem'>
        {itens.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Despesa;
