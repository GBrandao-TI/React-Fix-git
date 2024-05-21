import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Atividades React - Gabriel Brandão</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/Atividade01">Atividade 1 e 2</Link>
                </li>
                <li>
                    <Link to="/Atividade03">Atividade 3</Link>
                </li>
                <li>
                  <Link to="/Atividade05"> Atividade05</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Home;
