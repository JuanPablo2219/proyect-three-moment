// Flag.tsx
import React from 'react';
import './style/Flag.css';

interface FlagProps {
  onClick: (color: string) => void;
}

const Flag: React.FC<FlagProps> = ({ onClick }) => {
  const handleStripeClick = (e: React.MouseEvent, color: string) => {
    e.stopPropagation();
    onClick(color);
  };

  return (
    <div className="flag" onClick={() => onClick('Amarillo')}>
      <div className="stripe yellow" onClick={(e) => handleStripeClick(e, 'Amarillo')}></div>
      <div className="stripe blue" onClick={(e) => handleStripeClick(e, 'Azul')}></div>
      <div className="stripe red" onClick={(e) => handleStripeClick(e, 'Rojo')}></div>
    </div>
  );
};

export default Flag;
