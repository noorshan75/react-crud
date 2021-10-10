import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Table from './Table';
import Add from './Add';
import NotFound from './NotFound';
import About from './About';
import Edit from './Edit';
import View from './View';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter,Switch,Route ,Redirect} from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
   
    <Switch>
      <Route exact path="/" >
        <Redirect to={{pathname:'/login'}}/>
      </Route>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute  exact path="/home" component={Table} />
      <ProtectedRoute  exact path="/add" component={Add} />
      <ProtectedRoute exact path="/about" component={About} />
      <ProtectedRoute   exact path="/edit/:id" component={Edit} />
      <ProtectedRoute  exact  path="/view/:id" component={View} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/view/:id" component={View}/> */}
      <Route  component={NotFound}/>
    </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

