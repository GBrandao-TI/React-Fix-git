import React, { useState } from 'react';

function List4() {
  // Estado para gerenciar a lista de itens
  const [items, setItems] = useState(["Teste = 1", "Teste = 2", "Teste = 3"]);

  // Função para inverter a ordem dos itens
  const reverseItems = () => {
    setItems(prevItems => [...prevItems].reverse());
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={reverseItems}>Reverse</button>
    </div>
  );
}

export default List4;
