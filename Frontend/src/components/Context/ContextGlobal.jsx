import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children, }) => {

  const [categories, setCategories] = React.useState([ 
    {
      id: '1',
      favorite: false,
      name: 'Ação',
      color: '#d9f7e9',
    },
    {
      id: '2',
      favorite: false,
      name: 'Aventura',
      color: '#ebfbff',
    },
    {
      id: '3',
      favorite: false,
      name: 'Romance',
      color: '#f0f8e2',
    },
    {
      id: '4',
      favorite: false,
      name: 'Desenvolvimento Pessoal',
      color: '#fde7e8',
    },
    {
      id: '5',
      favorite: false,
      name: 'Tecnologia',
      color: '#fae5f5',
    },
    {
      id: '6',
      favorite: false,
      name: 'Empreendedorismo',
      color: '#fff5d9',
    },
    {
      id: '7',
      favorite: false,
      name: 'Ficção Científica',
      color: '#ffeedf',
    },
  ])

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://book-ideal-api.onrender.com/books`)
    .then(resp => resp.json())
    .then((json) => setData(json))
  }, []);

  function clearData() {
    setData(null)
  }


  return (
    <GlobalContext.Provider
      value={{data, setData, clearData}}
    >
      {children}
    </GlobalContext.Provider>
  );
  
};