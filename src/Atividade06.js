import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import FormQuiz from './Semana6/FormQuiz';
import FormTicket from './Semana6/FormTicket';


function Atividade06() {
  return (
    <>
      <Link to="/">Retornar a Home</Link>

      <div className="FormQuiz espaco">
        <header className="FormQuiz-header">
          <FormQuiz />
        </header>
      </div>

      <div className="FormTicket espaco">
        <header className="FormTicket-header">
          <FormTicket />
        </header>
      </div>
      
    

    </>
  );
}

export default Atividade06;
