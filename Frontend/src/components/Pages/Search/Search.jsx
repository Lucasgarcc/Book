import React from 'react';
import './Search.css';
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ value, data, categories }) => {
  const [search, setSearch] = React.useState('');
  const [filteredBooks, setFilteredBooks] = React.useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
    if (!data) {
      // Handle the case where 'data' is null or undefined
      setFilteredBooks([]); 
      return; // Exit the useEffect hook
    }
  
    const filteredData = data.filter((book) => {
      const searchTerm = search.trim().toLowerCase(); 
      return book.name.toLowerCase().includes(searchTerm) ||
             categories.some(category => category.name.toLowerCase().includes(searchTerm));
    });
    setFilteredBooks(filteredData);
  };

  
  return (
    <>
      <div className='search'>
        <h2>Buscar</h2>
        <div className='search-field'>
          <input
            type="text"
            value={value}
            //onChange={handleSearch}
            placeholder="Buscar por nome ou categoria" // Add placeholder for clarity
          />
          <IoSearchSharp size='2rem' color='#EB5A3C' />
        </div>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id}>
              <h3>{book.name}</h3>
              <p>{book.category}</p>
              <p>{book.description}</p>
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </div>
    </>
  );
};

export default Search;