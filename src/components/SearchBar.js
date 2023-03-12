import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


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
        <Container>
            <Row>
            <form className='search-div' onSubmit={handleSearch}>
                <input type="text" placeholder="Search for recipes..." onChange={(e) =>  setSearch(e.target.value)}/>
                <button className='search-btn'type='submit' onSubmit={handleSearch}> <FaSearch/></button>

            </form>
            </Row>
            <Row>
            {loading ? ( <h3>Loading...</h3>
            ) : (
                results.map((item) => {
                    return(
                            <Col xs={6} md={4}>
                                <Card>
                                    <Card.Img fluid className='img' variant="top" src={item.image}/>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    )
                }
                )
              )}
            </Row>
        </Container>
    );
}

export default SearchBar;
