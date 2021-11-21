import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import { Jumbotron, Container, CardColumns, Card } from 'react-bootstrap';

const SavedCities = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [userData, setData] = useState(loading ? null : data.me);

  if(!userData) {
    return null
  }

  return (
    <>
      <div className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved cities!</h1>
        </Container>
      </div>
      <Container>
        <h2>
          {userData.savedCities.length
            ? `Viewing ${userData.savedCities.length} saved ${userData.savedCities.length === 1 ? 'city' : 'cities'}:`
            : 'You have no saved cities!'}
        </h2>
        <div>
          {userData.savedCities.map((city) => {
            return (
              <Card key={city.cityId} border='dark'>
                <Card.Body>
                  <Card.Title>{city.city}</Card.Title>
                  <p>Country: {city.country}</p>
                  <p>Population: {city.population}</p>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SavedCities;