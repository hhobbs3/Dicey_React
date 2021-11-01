import logo from './logo.svg';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LootTableAccess from "./pages/Loot";
import LootTableInsertion from "./pages/Loot";
import FetchExample from "./pages/FetchExample";
import FetchExample2 from "./pages/FetchExample2";
import AxiosExample1 from "./pages/AxiosExample1";

import { useState, useEffect } from "react";

function App() {
	const [activeTab, setActiveTab] = useState("");
  return (
    <div className="App">

	<Router>
	
	
		<div class="card text-center">


			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
				<li class="nav-item">
					<a class="nav-link" ><Link to="/">Home</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" ><Link to="/loot">Loot Insertion</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" ><Link to="/fetch_example">Fetch Example 1</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" ><Link to="/fetch_example_2">Fetch Example 2</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" ><Link to="/axios_example_1">Axios Example 1</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" ><Link to="/contact">Contact Me</Link></a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled">Disabled</a>
				</li>
				</ul>
			</div>
			
		</div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loot">
          <LootTableAccess />
        </Route>
		<Route path="/fetch_example">
          <FetchExample />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
		<Route path="/fetch_example_2"> 
          <FetchExample2 />
        </Route>
        <Route path="/axios_example_1">
          <AxiosExample1 />
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
