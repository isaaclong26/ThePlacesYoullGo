import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GET_ME} from '../utils/queries';
import {REMOVE_CITY} from '../utils/mutations';
import { removeCityId } from '../utils/localStorage';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

const SavedCities = () => {
  const { loading, data } = useQuery(GET_ME);

  const [userData, setData] = useState(loading ? null : data.me);

  const [removeCity, {error}] = useMutation(REMOVE_CITY);

  if(!userData) {
    return null
  }

  const handleDeleteCity = async (cityId) => {
    try {
      const data = await removeCity({
        variables: {cityId},
      });

      setData(() => {
        return {
          ...userData,
          savedCities: data.data.removeCity.savedCities
        }
      })
    } catch(err) {
      console.error(err);
    }
    removeCityId(cityId);
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved cities!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedCities.length
            ? `Viewing ${userData.savedCities.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((city) => {
            return (
              <Card key={city.cityId} border='dark'>
                <Card.Body>
                  <Card.Title>{city.city}</Card.Title>
                  <p className='small'>Country: {city.country}</p>
                  <Card.Text>Populate: {city.population}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteCity(city.cityId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedCities;