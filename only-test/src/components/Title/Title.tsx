import React from 'react';
import gradient from './../../assets/img/gradient-line.png';
import './style.scss';

const Title = () => {
  return (
    <>
      <div className="title-wrapper">
        <img className="gradient" src={gradient} alt="" />
        <div className="title">Исторические даты</div>
      </div>
    </>
  );
};

export default Title;
