import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MovingDot = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="danger">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default MovingDot;
