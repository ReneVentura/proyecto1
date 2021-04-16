import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/menu.css'
import Home from './componets/Home.js';
import Lifestyle from './componets/Lifestyle.js';
import Community from './componets/Community.js';



export default function BasicExample() {
    return (
      <Router>
        <div>
        <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
            <Link class="py-2" to="/" aria-label="Razer">
            <img src="https://i.pinimg.com/originals/1e/ca/7f/1eca7f93c2e86b3178ab3133ac7d498f.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
            </Link>
            <Link to="#" class="py-2 d-none d-md-inline-block" >PC</Link>
            <Link to="#" class="py-2 d-none d-md-inline-block" >Console</Link>
            <Link to="#" class="py-2 d-none d-md-inline-block" >Mobile</Link>
            <Link to="/lifestyle" class="py-2 d-none d-md-inline-block" >Lifestyle</Link>
            <Link to="#" class="py-2 d-none d-md-inline-block" >Services</Link>
            
            <Link to="/community" class="py-2 d-none d-md-inline-block" >Community</Link>
            <Link to="#" class="py-2 d-none d-md-inline-block" >Support</Link>
           

        </div>
        
        </nav>
        
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/PC">
              <About />
            </Route>
            <Route path="/lifestyle">
              <Lifestyle/>
            </Route>
            <Route path="/community">
              <Community />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
 
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }