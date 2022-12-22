import React from 'react';
import gsap from 'gsap';
import './style.scss';

const Items = () => {
  const rotateItem = () => {
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.to('.items', { duration: 2, rotation: '+=90' }, 'spin');
    tl.to('.item', { duration: 2, rotation: '-=90' }, 'spin');
  };

  return (
    <>
      <div className="items">
        <div className="item item1" id="item1">
          2
        </div>
        <div className="item item2" id="item2">
          1
        </div>
        <div className="item item3" id="item3">
          3
        </div>
        <div className="item item4" id="item4">
          4
        </div>
      </div>

      <button onClick={() => rotateItem()}>PRESS ME</button>
    </>
  );
};

export default Items;
