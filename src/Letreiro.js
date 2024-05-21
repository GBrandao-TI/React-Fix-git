import React, { useState, useEffect } from 'react';

const Letreiro = () => {
 const [texto, setTexto] = useState('');
 const [index, setIndex] = useState(0); //use state para efeito de digitação
 const textoFinal = 'Conheça a Fatec';

 useEffect(() => {
    const timer = setTimeout(() => {
      setTexto(textoFinal.slice(0, index + 1));
      setIndex(index + 1);
    }, 100); //velocidade em que será escrito

    if (index === textoFinal.length) {
      setIndex(0); // reinicia a digitação
    }

    return () => clearTimeout(timer);
 }, [index, textoFinal]);

 return <div>{texto}</div>;
};

export default Letreiro;
