import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../styles/SearchBar.css'

export const SearchBar = () => {
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input placeholder='Search for recipes...' />
    </div>
  );
}
