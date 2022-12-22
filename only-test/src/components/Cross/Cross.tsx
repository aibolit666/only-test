import React from 'react';
import './style.scss';

const Cross: React.FC = () => {
  return (
    <>
      <div className="cross">
        <div className="cross-line-horizontal"></div>
        <div className="cross-line-vertical"></div>
      </div>
    </>
  );
};

export default Cross;
