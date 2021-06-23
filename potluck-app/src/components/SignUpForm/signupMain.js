import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './signup';

import * as yup from 'yup';
import schema from './signupSchema';
import { newUserFeature } from '../../Actions/potluckActions';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username: '',
    password: '',
  };
  
  const initialFormErrors = {
    username: '',
    password: '',
  };
  
  const initialUsers = [];
  const initialDisabled = true;
  
  
  function SignupMain(props) {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const { push } = useHistory();
  
    const postNewUsers = (user) => {
      axios
        .post('https://potluck-planner-03.herokuapp.com/api/auth/register', user)
        .then((res) => {
          //console.log(res.data);
          setUsers([...users, res.data]);
          setFormValues(initialFormValues);
          
          push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      schema.isValid(formValues).then((valid) => {
        setDisabled(!valid);
      });
    }, [formValues]);
  
    const inputChange = (name, value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: '' });
        })
        .catch((err) => {
          setFormErrors({ ...formErrors, [name]: err.errors[0] });
        });
  
      setFormValues({ ...formValues, [name]: value });
    };
  
    const submitForm = () => {
      const newUser = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
      };
  
      postNewUsers(newUser);
      newUserFeature(newUser);
    };
  
    return (
        <Signup
          values={formValues}
          change={inputChange}
          submit={submitForm}
          disabled={disabled}
          errors={formErrors}
        />
    );
  }
  
  export default SignupMain;