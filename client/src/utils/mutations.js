import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_CITY = gql`
    mutation saveCity($city: [String], $country: String, $population: String) {
        saveCity(city: $city, country: $country, population: $population) {
            _id
            username
            savedCities {
              city
              country
              population
            }
        }
    }
`;

export const REMOVE_CITY = gql`
    mutation removeCity($cityId:String!) {
        removeCity(cityId: $cityId) {
            username
            savedCities {
                city
                country
                population
            }
        }
    }
`;

