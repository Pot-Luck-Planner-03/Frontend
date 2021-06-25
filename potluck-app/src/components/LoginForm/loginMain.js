import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Login from './login'
import formSchema from './loginSchema';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const initialCredentials = {
	username: '',
	password: ''
};

const initialsErrors = {
    username: '',
    password: ''
}

const initialLogins = [];
const initialDisabled = true;


function LoginMain(){
    const [logins, setLogins] = useState(initialLogins)
    const [credentials, setCredentials] = useState(initialCredentials)
    const [errors, setErrors] = useState(initialsErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const { push } = useHistory();

    const submitLogin = (newLogin) => {
        axios  
            .post('https://potluck-planner-03.herokuapp.com/api/auth/login', newLogin)
            .then(res => {
                setLogins([...logins, res.data])
                setCredentials(initialCredentials);
                // console.log("res data", res)
                const token = res.data.token;
                localStorage.setItem('token', token);
                push('/dashboard')
            })
            .catch(err => {
                console.log(err)
        })
    }
    

    const handleChange = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
          setErrors({
            ...errors,
            [name]: '',
          });
        })
        .catch((err) => {
          setErrors({
            ...errors,
            [name]: err.errors[0],
          });
        });
        
        
        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        const newLogin = {
            username: credentials.username.trim(),
            password: credentials.password.trim(),
        }
        submitLogin(newLogin);
    }

    useEffect(() => {
        formSchema.isValid(credentials).then((valid) => {
          setDisabled(!valid);
        });
      }, [credentials]);





    return (
        <Login 
            values={credentials}
            submit={handleSubmit}
            change={handleChange}
            errors={initialsErrors}
            disabled={disabled}
        />
        // <form id="login" className="box">
		// 	<h1>Login Here</h1>

		// 	<label>
		// 		Name
		// 		<input
		// 			type="text"
		// 			name="username"
		// 			id="name-input"
		// 			placeholder="Username"
		// 			onChange={handleChange}
		// 			// value={credentials.username}
		// 		/>
		// 	</label>
		// 	<br />
		// 	<label>
		// 		Password
		// 		<input
		// 			type="password"
		// 			name="password"
		// 			id="password-input"
		// 			minLength="5"
		// 			placeholder="Password"
		// 			onChange={handleChange}
		// 			// value={credentials.password}
		// 		/>
		// 	</label>
		// 	<br />

		// 	<button id="login-btn">Login</button>
		// </form>
    )
}

const mapStateToProps = (state) => {
    return {
      username: state.username,
      password: state.password,
    };
  };

  export default connect(mapStateToProps, {})(LoginMain);