import React, { useState } from 'react';

function Formulario() {
  // Estados para gerenciar os valores dos campos do formulário
  const [selecionado, setSelecionado] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleChange = (event) => {
    setSelecionado(event.target.value);
  };

  // Envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    alert(`Para: ${selecionado}\nMensagem: ${mensagem}`);
    setSelecionado('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Para:</p>
      <select value={selecionado} onChange={handleChange}>
        <option value="">Selecione...</option>
        <option value="Bob">Bob</option>
        <option value="Michael">Michael</option>
        <option value="Jordan">Jordan</option>
      </select>
      <br />
      <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite sua mensagem aqui..."></textarea>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
