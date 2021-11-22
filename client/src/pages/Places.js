import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import "../components/css/Places_style.css";
import {SAVE_CITY} from '../utils/mutations';
import Auth from '../utils/auth';
import { searchCities } from '../utils/API';
import { Form, Button, Card } from 'react-bootstrap';
import { saveCityIds, getSavedCityIds } from '../utils/localstorage';

const SearchCity = () => {
    const [searchedCities, setSearchedCities] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [savedCityIds, setSavedCityIds] = useState(getSavedCityIds());

    const [saveCity, {error}] = useMutation(SAVE_CITY);

    useEffect(() => {
        return () => saveCityIds(savedCityIds);
      });

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
            console.log(response);
            const { data } = await response.json();

            const cityData = data.map((city) => ({
                cityId: city.id,
                city: city.name,
                country: city.country,
                population: city.population
            }));

            setSearchedCities(cityData);
            console.log(setSearchedCities);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleSaveCity = async (cityId) => {
        const cityToSave = searchedCities.find((city) => city.cityId === cityId);
        console.log(searchedCities);
        try {
          await saveCity({
            variables: { ...cityToSave}
          });
    
          setSavedCityIds([...savedCityIds, cityToSave.cityId]);
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
                                <Button onClick={() => handleSaveCity(city.cityId)}>Save</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchCity;