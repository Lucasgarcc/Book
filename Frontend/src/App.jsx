import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import UseFetch from './components/Hooks/UseFetch/UseFetch';

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
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Detail />
              {loading && <p style={{ color: '#000' }}>Carregando...</p>}
              {error && <span style={{ color: 'red' }}>{error}</span>}
              {!loading && data && ( <Emphasis
                img={data.length > 0 ? data[data.length - 1].image : null}
                title={data.length > 0 ? data[data.length -1].name : 'Nenhum livro disponível'}
                description={
                  data.length > 0
                    ? data[data.length - 1].description
                    : 'Adicione um livro para vê-lo em destaque.'
                }
                categories={categories.map((item) => item.name)}
                registerBook={addNewBook}
                registerCategory={addNewCategory}
              />
              )}

              <h2 className="title">Recomenda Livros</h2>
              {loading && <p style={{ color: '#000' }}>Carregando...</p>}
              {error && <span style={{ color: 'red' }}>{error}</span>}
              {!loading && data && (
                categories.map((category) => (
                  <Category
                    key={category.id}
                    category={category}
                    title={category.name}
                    book={data.filter((b) => b.category === category.name)}
                    deleteCategory={deleteCategory}
                    changeColorCategory={handleColorCategory}
                    toggleFavorite={toggleFavorite}
                  />
                ))
              )}
            </>
          }
        />
        <Route
          path="/cadastro"
          element={
            <Register
              categories={categories.map((item) => item.name)}
              registerBook={addNewBook}
              registerCategory={addNewCategory}
            />
          }
        />
        <Route
          path="/buscar"
          element={
            <>
              <Search />
              {loading && <p style={{ color: '#000' }}>Carregando...</p>}
              {error && <span style={{ color: 'red' }}>{error}</span>}
              {!loading && data && (
                categories.map((category) => (
                  <Category
                    key={category.id}
                    category={category}
                    title={category.name}
                    book={data.filter((b) => b.category === category.name)}
                    deleteCategory={deleteCategory}
                    changeColorCategory={handleColorCategory}
                    toggleFavorite={toggleFavorite}
                  />
                ))
              )}
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
