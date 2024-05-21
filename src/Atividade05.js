import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Toolbar from './Semana5/Toolbar';
import Gallery from './Semana5/Gallery';
import Counter from './Semana5/Counter';
import Formulario from './Semana5/Form';
import MovingDot from './Semana5/MovingDot';
import Form2 from './Semana5/Form2';
import Form3 from './Semana5/Form3';
import List from './Semana5/List';
import List2 from './Semana5/List2';
import ShapeEditor from './Semana5/ShapeEditor';
import CounterList from './Semana5/CounterList';
import List4 from './Semana5/List4';
import BucketList from './Semana5/BucketList';

function Atividade01() {
  return (
    <>
      <Link to="/">Retornar a Home</Link>
      <div className="Toolbar espaco">
        <header className="Toolbar-header">
          <Toolbar />
        </header>
      </div>



      <div className="Gallery espaco">
        <header className="Gallery-header">
          <Gallery />
        </header>
      </div>

      <div className="Counter espaco">
        <header className="Counter-header">
          <Counter />
        </header>
      </div>

      <div className="Formulario espaco">
        <header className="Formulario-header">
          <Formulario />
        </header>
      </div>

      <div className="MovingDot espaco">
        <header className="MovingDot-header">
          <MovingDot />
        </header>
      </div>

      <div className="Form2 espaco">
        <header className="Form2-header">
          <Form2 />
        </header>
      </div>

      <div className="Form3 espaco">
        <header className="Form3-header">
          <Form3 />
        </header>
      </div>

      <div className="List espaco">
        <header className="List-header">
          <List />
        </header>
      </div>

      <div className="List2 espaco">
        <header className="List2-header">
          <List2 />
        </header>
      </div>

      <div className="ShapeEditor espaco">
        <header className="ShapeEditor-header">
          <ShapeEditor />
        </header>
      </div>

      <div className="CounterList espaco">
        <header className="CounterList-header">
          <CounterList />
        </header>
      </div>

      <div className="List4 espaco">
        <header className="List4-header">
          <List4 />
        </header>
      </div>

      <div className="List4 espaco">
        <header className="List4-header">
          <List4 />
        </header>
      </div>
    </>
  );
}

export default Atividade01;
