import '../style/Receita.css'
import Item from './Item';

const Receita = ({ itens, onItemRemove }) => {
  const valorTotalReceita = itens
    .filter(item => item.tipo === 'Receita')
    .reduce((total, item) => total + Number(item.valor), 0);

  const valorFormatadoRec = valorTotalReceita.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <div className="Receita">
      <p>Receita</p>
      <p>Valor total: R${valorFormatadoRec}</p>
      <div className='RecItem'>
        {itens.map((item, index) => (
          <Item key={index} data={item} onRemove={onItemRemove} />
        ))}
      </div>
    </div>
  );
};

export default Receita;
