import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from './components/Context/GlobalContext';

// Pages Routes
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Index';
import Register from './components/Pages/Form/Form';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Emphasis from './components/Emphasis/Emphasis';
import Detail from './components/Emphasis/Detail/Detail';
import Search from './components/Pages/Search/Search'; 

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
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Detail />
              <Emphasis 
                img={book.length > 0 ? book[0].image : null}
                title={book.length > 0 ? book[0].name : 'Nenhum livro disponível'}
                description={book.length > 0 ? book[0].description : 'Adicione um livro para vê-lo em destaque.'}
                categories={categories.map((item) => item.name)}
                registerBook={addNewBook}
                registerCategory={addNewCategory}
              />

              
              <h2 className="title">Recomenda Livros</h2>
              {categories.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  title={category.name}
                  book={book}
                  deleteCategory={deleteCategory}
                  changeColorCategory={handleColorCategory}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </>
          }
        />
        {/* Página de cadastro */}
        <Route
          path="/cadastro"
          element={
            <>
              <Register
                categories={categories.map((item) => item.name)}
                registerBook={addNewBook}
                registerCategory={addNewCategory}
              />
            </>
          }
        />

        {/* Página de Busca */}
        <Route
          path= "/buscar"
          element= {
            <>
              <Search /> 
              {categories.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  title={category.name}
                  book={book}
                  deleteCategory={deleteCategory}
                  changeColorCategory={handleColorCategory}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </>

          } 
        />  

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
