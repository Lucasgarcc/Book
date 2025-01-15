import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


// Pages Routes
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner'
import Emphasis from './components/Emphasis/Emphasis'
import Detail from './components/Emphasis/Detail/Detail'
import Footer from './components/Footer/Footer'

function App({}) {
  const [categories, setCategories] = React.useState([
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ação',
      color: '#d9f7e9',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Aventura',
      color: '#ebfbff',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Romance',
      color: '#f0f8e2',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Desenvolvimento Pessoal',
      color: '#fde7e8',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tecnologia',
      color: '#fae5f5',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Empreendedorismo',
      color: '#fff5d9',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ficção Científica',
      color: '#ffeedf',
    },
  ]);

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
    setBook(
      book.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  };

  return (
    <div className="App">
      <Menu />
        <Routes>  
          <Route
            path='/'
            element ={
              <>
                <Banner />
                <Detail />
                <Emphasis />
              </>
              
            } 
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;