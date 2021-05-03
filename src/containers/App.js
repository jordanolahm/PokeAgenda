import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../containers/App.css';


import NavBar from '../components/layout/NavBar';
import Dashboard from '../components/layout/Dashboard';
import SearchBar from '../components/search/SearchBar';
import Pokemon from '../components/pokemon/Pokemon';
import { useState, useEffect} from 'react'

const App = () => {
  const [pokeName, setPokeName] = useState("")
  useEffect(()=>{console.log(pokeName)},[pokeName]) 
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#E5E5E5" }}>
        <NavBar setPokeName={setPokeName} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Dashboard pokeName={pokeName} />
            </Route>
            <Route component={Login} exact path="/login" />
            <Route component={Register} exact path="/register" />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
        <footer>
          <div className="footerText">
            <text>Front-end Test 2021</text>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
