import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {SAVE_BOOK} from '../utils/mutations';
import Auth from '../utils/auth';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { searchCities } from '../utils/API';

const searchCities = () => {
    const [searchedCities, setSearchInput] = useState([]);

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
                
            }))
        }
    }
}