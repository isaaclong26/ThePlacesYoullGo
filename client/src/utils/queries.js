import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      
    }
  }
`;

export const QUERY_ME = gql`
 {
     me {
       id
       username
       email
       savedCities {
        cityId
        city
        country
        population
       }
    }
}
`;