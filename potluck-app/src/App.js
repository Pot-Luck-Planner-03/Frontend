import './App.css';

function App() {
  return (
    <div className="App">
			<div className="wrapper">
				<div className="container">
					<div className="nav">
						<div className="logo">WMP</div>
						<div className="menu">
							<ul className="navMenu">
								<Link to="/">
									<li>
										<a href="#0">Home</a>
									</li>
                  <li>
                    <a href="#0">Login</a>
                  </li>
                  <li>
                    <a href="#0">Register</a>
                  </li>
								</Link>
              </ul>
            </div>
          </div>   
				</div>
			</div>
		</div>
  );
}

export default App;
