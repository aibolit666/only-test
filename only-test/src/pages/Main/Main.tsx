import Circle from 'components/Circle/Circle';
import Cross from 'components/Cross/Cross';
import React from 'react';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <div className="main">
        <Cross />
        <Circle />
      </div>
    </>
  );
};

export default Main;
