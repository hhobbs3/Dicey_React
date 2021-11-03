import logo from './logo.svg';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LootTableAccess from "./pages/Loot";
import LootTableInsertion from "./pages/Loot";
import Roll from "./pages/Roll";
import FetchExample2 from "./pages/FetchExample2";
import AxiosExample1 from "./pages/AxiosExample1";
import Dashboard from "./pages/Dashboard";

import { useState, useEffect } from "react";

function App() {
	const [activeTab, setActiveTab] = useState("");
  return (
    <div className="App">
<Router>
		<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a class="nav-link px-2 text-secondary"><Link to="/">Home</Link></a></li>
          <li><a class="nav-link px-2 text-white"><Link to="/dashboard">Dashboard</Link></a></li>
          <li><a class="nav-link px-2 text-white"><Link to="/loot">Loot Insertion</Link></a></li>
					<li><a class="nav-link px-2 text-white"><Link to="/roll">Roll</Link></a></li>
					<li><a class="nav-link px-2 text-white"><Link to="/fetch_example_2">Fetch Example 2</Link></a></li>
					<li><a class="nav-link px-2 text-white"><Link to="/axios_example_1">Axios Example 1</Link></a></li>
					<li><a class="nav-link px-2 text-white"><Link to="/contact">Contact Me</Link></a></li>
					<li><a class="nav-link px-2 text-white">FAQs</a></li>
          <li><a class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
				<Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/loot">
          <LootTableAccess />
        </Route>
				<Route path="/roll">
          <Roll />
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
