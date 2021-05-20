import React from 'react';

import './App.css';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./components/Course";


  function App() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
              <Route exact path='/'>Home</Route>
              <Route exact path='/course'>
                <Course/>
              </Route>
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
