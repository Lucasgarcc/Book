import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import UseFetch from './components/Hooks/UseFetch/UseFetch';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [categories, setCategories] = React.useState([
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ação',
      color: '#EB5B00',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Aventura',
      color: '#ffcb3d',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Romance',
      color: '#16C47F',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Desenvolvimento Pessoal',
      color: '#EB5B00',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tecnologia',
      color: '#ffcb3d',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Empreendedorismo',
      color: '#16C47F',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Ficção Científica',
      color: '#EB5B00',
    },
  ]);

  const { data, loading, error, request, setLoading, setData } = UseFetch();
  const url = `https://book-ideal-api.onrender.com/books`;

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

    book ? (setBook([...book, { ...bookData, id: uuidv4() }])) 
    : null;

    data ? setData([...data, { ...bookData, id: uuidv4() }])
    : null
    
  };


  const addNewCategory = (newCategories) => {
    setCategories([...categories, { ...newCategories, id: uuidv4() }]);
  };

  const toggleFavorite = (id) => {
    setBook((prevBooks) =>
      prevBooks.map((book) =>
       book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
    setData((prevData) =>
      prevData.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  };


  
  const deleteBook = async (id) => { 
    try {

      // Localiza o livro no estado `data`
      const bookDelete = data.find((book) => book.id === id);

      const urlBook = `https://book-ideal-api.onrender.com/books/${bookDelete.id}`;
      //console.log(`URL para DELETE: ${urlBook}`);
  
      // Configura o corpo da requisição
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookDelete),
      };
  
      const response = await request(urlBook, options);
  
      if (response?.resp?.ok) {
        //console.log("Livro deletado com sucesso da API!");

        // Atualiza o estado local para remover o livro excluído
        
        setData(data.filter((book) => book.id !== id));
      } else {
        //console.error("Resposta da API:", response);
        throw new Error(
          `Erro ${response?.resp?.status || "desconhecido"}: ${response?.json?.message || "Erro ao deletar o livro."}`
        );
      }
    } catch (err) {
      console.error("Erro ao deletar livro:", err);
    }
  };
  
  return (
    <AppRoutes
      categories={categories}
      data={data}
      setData={data}
      loading={loading}
      error={error}
      handleColorCategory={handleColorCategory}
      addNewBook={addNewBook}
      deleteBook={deleteBook}
      addNewCategory={addNewCategory}
      toggleFavorite={toggleFavorite}
    />
  );
}

export default App;
