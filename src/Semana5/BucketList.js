import React, { useState } from 'react';

function BucketList() {
  // Estado para gerenciar os itens selecionados
  const [selectedItems, setSelectedItems] = useState([]);

  //teste
  const toggleSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i!== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <div>
      <h2>My list of art to see:</h2>
      <ul>
        {["Big Bellies", "Lunar Landscape", "Terracotta Arm"].map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => toggleSelection(item)} style={{ marginLeft: '10px' }}>Check</button>
          </li>
        ))}
      </ul>

      <h2>Your list of art to see:</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
