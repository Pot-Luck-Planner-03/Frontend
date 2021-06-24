import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';


import Login from './components/LoginForm/loginMain'
import Signup from './components/SignUpForm/signupMain';
// import NewEvent from './components/newEvent';
import Dashboard from './components/dashboard';

import PrivateRoute from './PrivateRoute';

function App() {

    const logout = () => {
      window.localStorage.removeItem('token');
    };

  return (
    <div className="App">
			<div className="wrapper">
				<div className="container">
					<div className="nav">
						<div className="logo">Potluck Planning!</div>
						<div className="menu">
							<ul className="navMenu">
									<li>
										<Link onClick={logout} to="/">Logout</Link>
									</li>
                  <li>
										<Link to="/Login">Login</Link>
									</li>
                  <li>
										<Link to="/signup">Signup</Link>
									</li>
              </ul>
            </div>
            <Switch>
              <Route path="/signup">
                <Signup/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>   

				</div>
			</div>
		</div>
  );
}

export default App;
