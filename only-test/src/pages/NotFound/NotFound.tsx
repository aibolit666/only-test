import React from 'react';
import notFound from './../../assets/img/error.png';
import './style.scss';

export const NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <div>
          <img src={notFound} alt="404" />
        </div>
        Page not found
      </div>
    </>
  );
};
