import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import FormQuiz from './Semana6/FormQuiz';
import FormTicket from './Semana6/FormTicket';
import Accordion from './Semana6/Accordion';
import Messenger from './Semana6/ChatContact';


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

      <div className="Accordion espaco">
        <header className="Accordion-header">
          <Accordion />
        </header>
      </div>


      <div className="Messenger espaco">
        <header className="Messenger-header">
          <Messenger />
        </header>
      </div>
      
    

    </>
  );
}

export default Atividade06;
