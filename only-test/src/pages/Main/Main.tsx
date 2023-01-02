import Circle from 'components/Circle/Circle';
import Cross from 'components/Cross/Cross';
import Title from 'components/Title/Title';
import React from 'react';
import Slider1 from 'components/Slider1/Slider1';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <div className="main">
        <Slider1 />
        <Title />
        <Cross />
        <Circle />
      </div>
    </>
  );
};

export default Main;
