import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({ children, registerBook, registerCategory }) => {
  return (
    <GlobalContext.Provider
      value={{}}
    >
      {children}
    </GlobalContext.Provider>
  );

};