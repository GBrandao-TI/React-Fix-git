import React, { useState } from 'react';

function List() {

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

  return (
    <div>
      <h2>Lista</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItemToList}>Adicionar</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
