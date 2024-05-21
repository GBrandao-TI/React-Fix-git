import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementaTres = () => {
    setCount(count + 3);
  };

  return (
    <div>
      <p>O valor total é: {count}</p>
      <button onClick={incrementaTres}>+3</button>
    </div>
  );
}

export default Counter;
