import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../src/components/Login/Login.css";
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const {data} = await login({
        variables: {...userFormData}
      });
      Auth.login(data.login.token);
    } catch(err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="Login">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            placeholder='Your email'
            name='email'
            type='text'
            value={userFormData.email}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name='password'
            value={userFormData.password}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!(userFormData.email && userFormData.password)}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
