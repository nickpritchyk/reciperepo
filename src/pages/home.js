import React from 'react'
import '../styles/home.css'
import { SearchBar } from '../components/SearchBar'

function Home() {
  return (

    <div className='search-page'>
        <h1>
            RecipeRepo
        </h1>
        <div className='search-bar-container'>
          <SearchBar />
        </div>
        <div className='results'>
          Search Results
        </div>
    </div>
  )
}

export default Home