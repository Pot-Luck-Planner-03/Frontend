import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';


import Login from './components/LoginForm/login'

import Signup from './components/SignUpForm/signupMain';

import NewEvent from './components/newEvent';

function App() {
  return (
    <div className="App">
			<div className="wrapper">
				<div className="container">
					<div className="nav">
						<div className="logo">Potluck Planning!</div>
						<div className="menu">
							<ul className="navMenu">
									<li>
										<a href="#0">Home</a>
									</li>
                  <li>
										<a href="#0">Login</a>
									</li>
                  <li>
										<a href="#0">Signup</a>
									</li>
              </ul>
            </div>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route
                path="/"
                render={props => {
                  return (
                    <div className="header">
                      <h1>Plan Your Potluck!</h1>
                      <p>Set up your event and items to bring!</p>
                      <Link to="/signup">
                        <button className="button">Get Started</button>
                      </Link>
                      {/* <NewEvent /> testing the forms before we connect */}
                    </div>
                  );
                }}
						  />
            </Switch>
          </div>   

				</div>
			</div>
		</div>
  );
}

export default App;
