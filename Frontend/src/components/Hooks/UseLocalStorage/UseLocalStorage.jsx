import React from "react";

const useLocalStorage = (key, value) => {
  const [state, setState] = React.useState(() => {
    
    const local = window.localStorage.getItem(key)
    return local ? local : value
  })
}
export default useLocalStorage;