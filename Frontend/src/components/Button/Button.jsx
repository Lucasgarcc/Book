import React from 'react';
import './Button.css';

const Button = ({children}) => {
  return  (
      <button type='submit'>{children}</button>
  )
};

export default Button; 