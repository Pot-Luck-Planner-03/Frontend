import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Login from './login'
import formSchema from './loginSchema';
import * as yup from 'yup';

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

    const submitLogin = (newLogin) => {
        axios  
            .post('https://potluck-planner-03.herokuapp.com/api/auth/login', newLogin)
            .then(res => {
                setLogins([...logins, res.data])
                setCredentials(initialCredentials);
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

    useEffect(() => {
        formSchema.isValid(credentials).then((valid) => {
          setDisabled(!valid);
        });
      }, [credentials]);


    const handleSubmit = () => {
        const newLogin = {
            username: credentials.username.trim(),
            password: credentials.password.trim(),
        }
        submitLogin(newLogin);
    }


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

export default LoginMain;