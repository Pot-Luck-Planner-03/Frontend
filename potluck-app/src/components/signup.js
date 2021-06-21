import React from 'react';

function Signup(){

    return(
        <form id="signup" className="signup-box">
			<h1>Sign Up</h1>

			<label>
				Name
				<input
					type="text"
					name="username"
					id="name-input"
					placeholder="Username"
					// value={signUpCredentials.username}
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
					// value={signUpCredentials.password}
					// onChange={handleChange}
				/>
			</label>

			<br />
			<label>
				Phone Number
				<input
					type="tel"
					name="phone_number"
					id="phone"
					placeholder="Phone Number"
					// maxLength="10"
					// value={signUpCredentials.phone_number}
					// onChange={handleChange}
				/>
			</label>
			<br />

			<button id="signup-btn">Create Account</button>
		</form>
    )
}

export default Signup;