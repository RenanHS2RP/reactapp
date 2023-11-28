import '../style/Cadastro.css';
import { useState } from 'react';

function Cadastro({ onSubmit }) {
  const [nomeValue, setNomeValue] = useState('');
  const [valorValue, setValorValue] = useState('');
  const [tipoValue, setTipoValue] = useState('');
  const [pagoValue, setPagoValue] = useState('');

  const mudancaManual = (event) => {
    const { id, value } = event.target;
    
    switch (id) {
      case 'nome':
        setNomeValue(value);
        break;
      case 'valor':
        setValorValue(value);
        break;
      case 'tipo':
        setTipoValue(value);
        break;
      case 'pago':
        setPagoValue(value);
        break;
      default:
        break;
    }
  };

  const submitManual = () => {
    onSubmit({ nome: nomeValue, valor: valorValue, tipo: tipoValue, pago: pagoValue});
    setNomeValue('');
    setValorValue('');
  };

  return (
    <div className="Cadastro">
      <p>Cadastro</p>
      <div className='CadastroInteface'>
        <div className='Input'>
          <p>Nome: </p>
          <input type="text" id="nome" value={nomeValue} onChange={mudancaManual} />
        </div>
        <div className='Input'>
          <p>Valor: </p>
          <input type="number" id="valor" value={valorValue} onChange={mudancaManual} />
        </div>
        <div className='Input'>
          <p>Tipo: </p>
          <select id="tipo" value={tipoValue} onChange={mudancaManual}>
            <option value="">Selecione</option>
            <option value="Receita">Receita</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
        <div className='Input'>
          <p>Pago por: </p>
          <select id="pago" value={pagoValue} onChange={mudancaManual}>
            <option value="">Selecione</option>
            <option value="Cartão">Cartão</option>
            <option value="Pix">Pix</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <button type="button" onClick={submitManual}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Cadastro;
