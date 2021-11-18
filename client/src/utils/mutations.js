import { gql } from '@apollo/client';

export const CREATE_LIST = gql`
    mutation createList($item: String!) {
        createList(item: $item)
    }
`