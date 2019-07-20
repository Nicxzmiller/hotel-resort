import React from 'react';

import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/about/" component={About}/>
      <Route exact path="/services/" component={Services}/>
      <Route exact path="/contact/" component={Contact}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
      
    </div>

  );
}

export default App;
