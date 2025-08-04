import React from 'react';
import './Search.css';
import { IoSearchSharp } from 'react-icons/io5';
import Category from '../../components/Category/Category';

const Search = ({ data, categories, deleteBook, handleColorCategory, toggleFavorite, loading, error }) => {
  const [search, setSearch] = React.useState('');
  const [filteredBooks, setFilteredBooks] = React.useState([]);
  const [filteredCategories, setFilteredCategories] = React.useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    setSearch(searchTerm);

    if (!data.length || !categories.length) {
      setFilteredBooks([]);
      setFilteredCategories([]);
      return;
    }

    // Filtrar livros
    const books = data.filter((book) =>
      book.name?.toLowerCase().includes(searchTerm) // Verifica se book.name existe
    );

    // Filtrar categorias
    const cats = categories.filter((category) =>
      category.name?.toLowerCase().includes(searchTerm) // Verifica se category.name existe
    );

    setFilteredBooks(books);
    setFilteredCategories(cats);
  };

  return (
    <div className="search">
      <h2>Buscar</h2>
      <div className="search-field">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar por nome ou categoria"
        />
        <IoSearchSharp size="2rem" color="#EB5A3C" />
      </div>
      <div className="search-results">
      {loading && <p style={{ color: "#000" }}>Carregando...</p>}
      {error && <span style={{ color: "red" }}>{error}</span>}
        {!loading && data && search ? (
          <div>
            {/* Categorias filtradas */}
            {filteredCategories.length > 0 && (
              <div className="category-list">
                <h3>Categorias</h3>
                {filteredCategories.map((category) => (
                  <Category
                    key={category.id}
                    category={category}
                    title={category.name}
                    book={data.filter((b) => b.category === category.name)}
                    deleteBook={deleteBook}
                    changeColorCategory={handleColorCategory}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}

            {/* Mensagem caso nada seja encontrado */}
            { data && filteredBooks.length === 0 && filteredCategories.length === 0 && (
              <p>Nenhum resultado encontrado.</p>
            )}
          </div>
        ) : !loading && data &&(
          
          <div className="categories">
            <h3>Todas as Categorias</h3>
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                title={category.name}
                book={data.filter((b) => b.category === category.name)}
                deleteBook={deleteBook}
                changeColorCategory={handleColorCategory}
                toggleFavorite={toggleFavorite}
              />
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
