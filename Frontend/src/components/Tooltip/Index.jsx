import React from 'react';
import './Tooltip.css';

const Tooltip = ({ onClick, icon,  tooltipText }) => {

  const handleTouch = (e) => {
    const tooltip = e.currentTarget.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';

    setTimeout(() => {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    }, 2000);
  };



  return (
    <div className="icon-with-tooltip" onClick={onClick}>
      {icon}
      <span className="tooltip">{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
