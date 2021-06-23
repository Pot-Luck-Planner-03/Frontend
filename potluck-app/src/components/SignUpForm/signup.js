import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Signup(props){

	const { values, change, submit, disabled, errors } = props;

	const onChange = (evt) => {
	  const { name, value } = evt.target;
	  change(name, value);
	};
  
	const { push } = useHistory();
  
	const routeToHome = () => {
	  push('/');
	}
  
	const onSubmit = (evt) => {
	  evt.preventDefault();
	  submit();
	};

    return(
        <form id="signup" className="signup-box" onSubmit={onSubmit}>
			<h1>Sign Up</h1>
			{errors}
			<label>
				Name
				<input
					type="text"
					name="username"
					id="name-input"
					placeholder="Username"
					value={values.username}
					onChange={onChange}
				/>
			</label>
			<br />
			<label>
				Password
				<input
					type="password"
					name="password"
					id="password-input"
					minLength="5"
					placeholder="Password"
					value={values.password}
					onChange={onChange}
				/>
			</label>

			<br />

			<button id="signup-btn" disabled={disabled}>Create Account</button>
			<button onClick={routeToHome}>Back</button>
		</form>
    )
}

export default Signup;