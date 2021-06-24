import React from 'react';



function Login(props){
	const {values, submit, change, errors, disabled} = props;

	const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

	const handleChange = e => {
		const {name, value} = e.target;
		change(name, value)
	};


    return (
        <form id="login" className="box" onSubmit={onSubmit}>
			<h1>Login Here</h1>
			{/* <div>{errors}</div> */}
			<label>
				Name
				<input
					type="text"
					name="username"
					id="name-input"
					placeholder="Username"
					onChange={handleChange}
					value={values.username}
				/>
			</label>
			<br />
			<label>
				Password
				<input
					type="password"
					name="password"
					id="password-input"
					minLength="2"
					placeholder="Password"
					onChange={handleChange}
					value={values.password}
				/>
			</label>
			<br />

			<button id="login-btn" disabled={disabled}>Login</button>
		</form>
    )
}

export default Login;