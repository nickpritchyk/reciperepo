import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import '../styles/SearchBar.css'

export const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    
    const handleSearch = async(e) => {
        e.preventDefault();
        setLoading(true);
        const tester = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=63bbfa20bb0d42b8927bc25fe8795946&query=' + search + ''
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=63bbfa20bb0d42b8927bc25fe8795946&query=' + search + '')
            .then(response => response.json())
            .then((json) => {
                setResults(json.results);
                setLoading(false);
                // console.log(typeof json)
        });
    }


    return (
        <div className='input-wrapper'>
            <form className='search-div' onSubmit={handleSearch}>
                <input type="text" placeholder="Search for recipes..." onChange={(e) =>  setSearch(e.target.value)}/>
            </form>
            {loading ? ( <h3>Loading...</h3>
            ) : (
                results.map((item) => 
                    <div className="card">
                        <img className="card-img-top" src={item.image} alt="Recipe Pic"/>
                    <div className="container">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Lorem Ipsum</p>
                        <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                )
              )}
        </div>
    );
}

export default SearchBar;
