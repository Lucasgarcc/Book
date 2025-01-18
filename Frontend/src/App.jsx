import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import UseFetch from './components/Hooks/UseFetch/UseFetch';


import AppRoutes from './components/Routes/AppRoutes';

function App({ }) {
  const [categories, setCategories] = React.useState([
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ação',
      color: '#5CB338',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Aventura',
      color: '#80C4E9',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Romance',
      color: '#CB9DF0',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Desenvolvimento Pessoal',
      color: '#F93827',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tecnologia',
      color: '#EC8305',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Empreendedorismo',
      color: '#FABC3F',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ficção Científica',
      color: '#173B45',
    },
  ]);

  const {data, loading, error, request, setLoading } = UseFetch();
  const url = `https://book-ideal-api.onrender.com/books`

 // Busca inicial de dados
 React.useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      await request(url);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, [request]);

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

  const [book, setBook] = React.useState([]);

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
    // Atualiza o estado de 'book'
    setBook(
      data.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  };  
  
  return (
      <AppRoutes 
        categories={categories}
        data={data}
        loading={loading}
        error={error}
        handleColorCategory={handleColorCategory}
        addNewBook={addNewBook}
        deleteCategory={deleteCategory}
        addNewCategory={addNewCategory}
        toggleFavorite={toggleFavorite}
      />
  );
}

export default App;
