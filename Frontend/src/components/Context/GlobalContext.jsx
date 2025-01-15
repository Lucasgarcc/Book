import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children, registerBook, registerCategory }) => {

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

  const [book, setBook] = React.useState([]);

  const handleColorCategory = (color, id) => {
    setCategories(
      categories.map((category) => {
        if (category.id === id) {
          category.color = color;
        }
        return category;
      })
    );
  };

  const addNewBook = (bookData) => {
    setBook([...book, { ...bookData, id: uuidv4() }]);
  };

  const deleteCategory = (id) => {
    setBook(book.filter((books) => books.id !== id));
  };

  const addNewCategory = (newCategories) => {
    setCategories([...categories, { ...newCategories, id: uuidv4() }]);
  };

  const toggleFavorite = (id) => {
    setBook(
      book.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        categories,
        setCategories,
        book,
        setBook,
        handleColorCategory,
        addNewBook,
        deleteCategory,
        addNewCategory,
        toggleFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
