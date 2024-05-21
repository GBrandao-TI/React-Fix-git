import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

function Atividade01() {
  return (
    <>
      <Link to="/">Retornar a Home</Link>
      <div className="Relogio">
        <header className="Relogio-header">
          <Relogio />
        </header>
      </div>
      <div className="Letreiro">
        <header className="Letreiro-header">
          <Letreiro />
        </header>
      </div>
    </>
  );
}

export default Atividade01;
