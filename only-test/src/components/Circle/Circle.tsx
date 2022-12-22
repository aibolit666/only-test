import React from 'react';
import './style.scss';

type Props = {
  children: React.ReactNode;
};

const Circle = (props: Props) => {
  return <div className="circle">{props.children}</div>;
};

export default Circle;
