import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualize aqui
import Home from './Home';
import Atividade01 from './Atividade01';
import Atividade03 from './Atividade03';
import Atividade05 from './Atividade05';

function Rotas() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/atividade01" element={<Atividade01 />} /> 
        <Route path="/atividade03" element={<Atividade03 />} />
        <Route path="/atividade05" element={<Atividade05 />}/>
      </Routes>
    </Router>
  );
}

export default Rotas;
