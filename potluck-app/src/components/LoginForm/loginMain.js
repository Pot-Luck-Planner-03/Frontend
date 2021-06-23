import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Login from './login'

const initialCredentials = {
	username: '',
	password: ''
};

const initialsErrors = {
    username: '',
    password: ''
}

const initialLogins = [];
// const initialDisabled = true;


function LoginMain(){
    const [logins, setLogins] = useState(initialLogins)
    const [credentials, setCredentials] = useState(initialCredentials)
    const [errors, setErrors] = useState(initialsErrors)
    // const [disabled, setDisabled] = useState(initialDisabled)

    const submitLogin = e => {
        e.preventDefault();
        axios  
            .post('https://potluck-planner-03.herokuapp.com/api/auth/login', credentials)
            .then(res => {
                setLogins([...logins, res.data])
                setCredentials(initialCredentials);
            })
            .catch(err => {
                console.log(err)
        })
    }
    

    const handleChange = (name, value) => {
        //YUP
        
        
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


    return (
        <Login 
            values={initialCredentials}
            submit={handleSubmit}
            change={handleChange}
            errors={initialsErrors}
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