import React from 'react';
import './Input.css';
import { VsxIcon } from "react-iconsax-vite";

const Input = ({ label, type, placeholder, requiredMessage, value, setValue, showError }) => {

  const handleChange= (event) => {
    const newValue = event.target.value
    setValue(newValue);
  }
  
  return (
      <div className='form-container'>
        <label htmlFor=''>{label}</label>
        <input  type={type}
          name={label} 
          placeholder={placeholder}
          value={value} 
          onChange={handleChange} />
        {showError && !value && <span className='error-message'>{requiredMessage}  
         <VsxIcon viewBox="0 0 20 24" iconName="Danger"  type="outline" size="12.5" color="#ff8800"/>
        </span>}
      </div>
  );
}

export default Input;