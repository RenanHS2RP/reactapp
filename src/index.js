import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadastro from './components/Cadastro';
import Despesa from './components/Despesa';
import Receita from './components/Receita';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [dadosCadastro, setDadosCadastro] = useState([]);

  const handleCadastroSubmit = (novoItem) => {
    // Adiciona um novo item ao estado
    setDadosCadastro(prevItems => [...prevItems, novoItem]);
  };

  return (
    <React.StrictMode>
      <div className='main'>
        <Cadastro onSubmit={handleCadastroSubmit} />
        <Receita itens={dadosCadastro.filter(item => item.tipo === 'Receita')} />
        <Despesa itens={dadosCadastro.filter(item => item.tipo === 'Despesa')} />
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
