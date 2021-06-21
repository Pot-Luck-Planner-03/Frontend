import React from 'react';

function Login(){

    return (
        <form id="login" className="box">
			<h1>Login Here</h1>

			<label>
				Name
				<input
					type="text"
					name="username"
					id="name-input"
					placeholder="Username"
					// value={credentials.username}
					// onChange={handleChange}
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
					// value={credentials.password}
					// onChange={handleChange}
				/>
			</label>
			<br />

			<button id="login-btn">Login</button>
		</form>
    )
}

export default Login;