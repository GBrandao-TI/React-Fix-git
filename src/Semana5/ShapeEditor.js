import React, { useState } from 'react';

function ShapeEditor() {
  // Estado para rastrear a posição das formas
  const [positions, setPositions] = useState({
    circle: { x: 0, y: 0 },
    square: { x: 0, y: 0 },
    triangle: { x: 0, y: 0 },
  });

  // Função para mover uma forma
  const moveShape = (shape, dx, dy) => {
    setPositions(prevPositions => ({
     ...prevPositions,
      [shape]: {...prevPositions[shape], x: prevPositions[shape].x + dx, y: prevPositions[shape].y + dy },
    }));
  };

  // Funções para mover as formas ao clicar nelas
  const handleClickCircle = () => moveShape('circle', 0, 20);
  const handleClickSquare = () => moveShape('square', 0, 20);
  const handleClickTriangle = () => moveShape('triangle', 0, 20);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div onClick={handleClickCircle} style={{ borderRadius: '50%', backgroundColor: 'blue', width: '30px', height: '30px' }}></div>
        <div onClick={handleClickSquare} style={{ backgroundColor: 'green', width: '30px', height: '30px' }}></div>
        <div onClick={handleClickTriangle} style={{ borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderRight: '20px solid green', width: '0', height: '40px' }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ borderRadius: '50%', backgroundColor: 'blue', width: '30px', height: '30px', position: 'absolute', left: positions.circle.x, top: positions.circle.y }}></div>
        <div style={{ backgroundColor: 'green', width: '30px', height: '30px', position: 'absolute', left: positions.square.x, top: positions.square.y }}></div>
        <div style={{ borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderRight: '20px solid green', width: '0', height: '40px', position: 'absolute', left: positions.triangle.x, top: positions.triangle.y }}></div>
      </div>
    </div>
  );
}

export default ShapeEditor;
