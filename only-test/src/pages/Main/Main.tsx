import Circle from 'components/Circle/Circle';
import Cross from 'components/Cross/Cross';
import Items from 'components/Items/Items';
import Title from 'components/Title/Title';
import React from 'react';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <div className="main">
        <Title />
        <Cross />
        <Circle />
        <Items />
      </div>
    </>
  );
};

export default Main;
