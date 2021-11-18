import { gql } from '@apollo/client';

export const QUERY_LIST = gql`
    query list{
        list{
            item
        }
    }
`;