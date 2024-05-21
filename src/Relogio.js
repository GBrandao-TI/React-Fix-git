import React, { useState, useEffect } from 'react';

function Relogio(){
 const [dateTime, setDateTime] = useState(new Date());

 useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

 return (
    <div>
      <p>Data e Hora Atual: {dateTime.toLocaleString()}</p>
    </div>
 );
};

export default Relogio;
