import React from 'react';
import gsap from 'gsap';
import './style.scss';

const Items = () => {
  let reps: number;
  const rotateItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.clientX > 1200 && e.clientY > 600) {
      console.log('right bottom');
      reps = 270;
    } else if (e.clientX < 900 && e.clientY > 600) {
      console.log('left bottom');
      reps = 180;
    } else if (e.clientX < 900 && e.clientY < 400) {
      console.log('left top');
      reps = 90;
    } else if (e.clientX > 1200 && e.clientY < 400) {
      console.log('right top');
      reps = 0;
    }
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.to('.items', { duration: 2, rotation: '+=' + reps }, 'spin');
    tl.to('.item', { duration: 2, rotation: '-=' + reps }, 'spin');
  };

  return (
    <>
      <div className="items">
        <div onClick={(e) => rotateItem(e)} className="item item1" id="item1">
          2
        </div>
        <div onClick={(e) => rotateItem(e)} className="item item2" id="item2">
          1
        </div>
        <div onClick={(e) => rotateItem(e)} className="item item3" id="item3">
          3
        </div>
        <div onClick={(e) => rotateItem(e)} className="item item4" id="item4">
          4
        </div>
      </div>
    </>
  );
};

export default Items;
