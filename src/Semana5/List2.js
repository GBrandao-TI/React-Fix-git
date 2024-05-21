import React, { useState } from 'react';

function List2() {

  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //novo item à lista
  const addItemToList = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  // Função para remover um item da lista
  const deleteItemFromList = (itemId) => {
    setItems(items.filter(item => item!== itemId));
  };

  return (
    <div>
      <h2>Lista 2</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItemToList}>Adicionar</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItemFromList(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;
