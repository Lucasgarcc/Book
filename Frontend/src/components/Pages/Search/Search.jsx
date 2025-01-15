import React from 'react';
import './Search.css'
import { IoSearchSharp } from "react-icons/io5";

const Search = ( { value }) => {

  return (
    <>
      <div className='search'>
        <h2>Buscar</h2>
        <div className='search-field'>
        <input type="text" value={value} />
        <IoSearchSharp size='2rem' color='#EB5A3C' />
        </div>
        
      </div>
    </>
  );

}

export default Search;