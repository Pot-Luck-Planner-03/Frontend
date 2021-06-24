import React from 'react';



function Login(props){
	const {values, submit, change, errors} = props;

	const handleChange = e => {
		const {name, value} = e.target;
		change(name, value)
	};

    return (
        <form id="login" className="box" onSubmit={submit}>
			<h1>Login Here</h1>

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
					minLength="5"
					placeholder="Password"
					onChange={handleChange}
					// value={credentials.password}
				/>
			</label>
			<br />

			<button id="login-btn">Login</button>
		</form>
    )
}

export default Login;