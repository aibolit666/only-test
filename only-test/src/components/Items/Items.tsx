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
    tl.to('.items', { duration: 1, rotation: wayToRotateOperand + degreesToRotate }, 'spin');
    tl.to('.item', { duration: 0, rotation: itemRotateOperand + degreesToRotate }, 'spin');
  };

  const setClickedItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    gsap.to('.item', { duration: 0.2, scale: 0.1 });

    document.querySelectorAll('.item').forEach((item) => item.classList.remove('active'));

    target.classList.add('active');

    gsap.to('.active', { duration: 1, scale: 1.0 });

    rotateItem(e);
  };

  return (
    <>
      <div className="items">
        <div onClick={(e) => setClickedItem(e)} className="item item1" id="2">
          2
        </div>
        <div onClick={(e) => setClickedItem(e)} className="item item2 active" id="1">
          1
        </div>
        <div onClick={(e) => setClickedItem(e)} className="item item3" id="3">
          3
        </div>
        <div onClick={(e) => setClickedItem(e)} className="item item4" id="4">
          4
        </div>
      </div>
    </>
  );
};

export default Items;
