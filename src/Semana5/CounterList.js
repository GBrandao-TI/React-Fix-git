import React, { useState } from 'react';

function CounterList() {
  // Estado para gerenciar os contadores dos itens
  const [counters, setCounters] = useState([0, 0, 0]);

  // Função para incrementar o contador de um item específico
  const incrementCounter = (index) => {
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[index]++;
      return newCounters;
    });
  };

  return (
    <div>
      {counters.map((counter, index) => (
        <div key={index}>
          <p>Contador {index + 1}: {counter}</p>
          <button onClick={() => incrementCounter(index)}>+1</button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;
