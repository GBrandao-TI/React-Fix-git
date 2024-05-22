import { useState } from 'react';

function Painel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Ver
        </button>
      )}
    </section>
  );
}

function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Painel title="Sobre">
      Com uma população de cerca de 2 milhões de habitantes, Almaty é a maior cidade do Cazaquistão. De 1929 a 1997, foi sua capital.
      </Painel>
      <Painel title="Etimologia">
        O nome vem da palavra kazakha `<span lang="kk-KZ">алма</span>`, que significa "maçã", e frequentemente é traduzido como "cheio de maçãs". Na verdade, a região circundante a Almaty é pensada como o lar ancestral da maçã, e a macieira selvagem `<i lang="la">Malus sieversii</i>` é considerada um candidato provável para o ancestral da maçã doméstica moderna
        Citations:

      </Painel>
    </>
  );
}

export default Accordion;
