import React from 'react';
import './Tooltip.css';

const Tooltip = ({ onClick, icon,  tooltipText }) => {

  return (
    <div className="icon-with-tooltip" onClick={onClick}>
      {icon}
      <span className="tooltip">{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
