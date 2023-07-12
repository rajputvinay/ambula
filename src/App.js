import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { TodoWrapper } from './TodoWrapper';
import { Shopping } from './Shopping';

import  Cart  from './Redux/reducer/Cart';
import { Navbar } from  './Navbar';
import { Product } from './Product';


function App() {
  return (<>
  <Router>
  <Navbar/>
    <Switch>
      <Route path='/' component={Home} exact><Home/></Route>
      <Route path='/shopping' component={Shopping} exact><Shopping/></Route>
      <Route path='/shopping/:id' component={Product} exact><Shopping/></Route>
      <Route path='/todo' component={TodoWrapper} exact><TodoWrapper/></Route>
      <Route path='/contact' component={Contact} exact><Contact/></Route>
      <Route path='/about' component={About} exact><About/></Route>
      <Route path='/cart' component={Cart} exact><Cart/></Route>
    </Switch>
  </Router>
  </>
    
  );
}

export default App;
