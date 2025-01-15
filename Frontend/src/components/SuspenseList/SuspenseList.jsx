import React from 'react';
import './SuspenseList.css';

const SuspenseList = ({ label, options, value, setValue }) => {
  return (
    <div className="suspense-list">
      <label htmlFor="select-field">{label}</label>
      <select
        id="select-field"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      >
        <option value="" disabled>
          Selecione um time
        </option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SuspenseList;
