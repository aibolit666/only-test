import Circle from 'components/Circle/Circle';
import Cross from 'components/Cross/Cross';
import Items from 'components/Items/Items';
import React from 'react';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <div className="main">
        <Cross />
        <Circle></Circle>
        <Items />
      </div>
    </>
  );
};

export default Main;
