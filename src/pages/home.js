import React, { useState } from 'react'
import '../styles/home.css'
import { SearchBar } from '../components/SearchBar'

function Home() {
  return (
    <div className='search-page'>
        <h1>
            RecipeRepo
        </h1>
        <SearchBar />
    </div>
  )
}

export default Home