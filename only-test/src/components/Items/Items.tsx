import React from 'react';
import gsap from 'gsap';
import './style.scss';

const Items = () => {
  let degreesToRotate: number;
  let wayToRotateOperand: string;
  let itemRotateOperand: string;

  const rotateItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.clientX > 1200 && e.clientY > 600) {
      console.log('right bottom');
      degreesToRotate = 90;
      wayToRotateOperand = '-=';
      itemRotateOperand = '+=';
    } else if (e.clientX < 900 && e.clientY > 600) {
      console.log('left bottom');
      degreesToRotate = 180;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.clientX < 900 && e.clientY < 400) {
      console.log('left top');
      degreesToRotate = 90;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.clientX > 1200 && e.clientY < 400) {
      console.log('right top');
      degreesToRotate = 0;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    }

    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.to('.items', { duration: 2, rotation: wayToRotateOperand + degreesToRotate }, 'spin');
    tl.to('.item', { duration: 2, rotation: itemRotateOperand + degreesToRotate }, 'spin');
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
