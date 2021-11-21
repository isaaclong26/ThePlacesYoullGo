import React, { useState } from 'react';
import "../components/css/Places_style.css";
import Auth from '../utils/auth';
import { searchCities } from '../utils/API';
import { Form, Button, Card } from 'react-bootstrap';

const SearchCity = () => {
    const [searchedCities, setSearchedCities] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!searchInput) {
            return false
        }
        try {
            const response = await searchCities(searchInput);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const { items } = await response.json();

            const cityData = items.map((city) => ({
                cityId: city.id,
                city: city.name,
                country: city.country,
                population: city.population
            }));

            setSearchedCities(cityData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="searchBar">
            <div>
                <h1>The Places You'll Go</h1>
                <h6>Search for a City</h6>
              <Form onSubmit={handleFormSubmit}>
                  <Form.Control 
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  className="mb-2"/>
                  <Button type="submit" className="mb-2">Submit</Button>
              </Form>
            </div>
            <div>
                {searchedCities.map((city) => {
                    return (
                        <Card key={city.cityId} border='dark'>
                            <Card.Body>
                                <Card.Title>{city.city}</Card.Title>
                                <p>Country: {city.country}</p>
                                <p>Population: {city.population}</p>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            {/* Shows your saved places only when you are logged in */}
            {Auth.loggedIn() ? (
                <>
                    <div>
                        <h1>My Places</h1>
                    </div>
                </>
            ) : (
                <>
                </>
            )}
        </div>
    );
}

export default SearchCity;