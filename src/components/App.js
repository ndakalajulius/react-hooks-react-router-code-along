

import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';
import Messages from './Messages';
import Signup from './Signup'


function App() {
  return (
    <div>
      <NavBar /> 
    <Routes>
      <Route exact path="/about"> component={ About} </Route>
      <Route exact path="/messages"> component={Messages }  </Route>
      <Route exact path="/signup"> component={Signup }  </Route>
      <Route exact path="/login"> component={Login}  </Route>
      <Route exact path="/">component={Home } </Route>
    </Routes>
    </div>
  )
}

export default App