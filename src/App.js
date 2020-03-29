import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Home, ProductList } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
import userContext from './contexts/index';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {

  const [ userData, setUserData] = useState([]);
  const addUserData = item => {
    setUserData([...userData, item])
  };
  useEffect(() => {
    axios
      .get('https://med-cabinet-development.herokuapp.com/api/user')
      .then(res => {
        console.log('res.data in app.js', res.data);
        setUserData(res.data);
      })
  }, [])

  return (
    <userContext.Provider value={{ userData, setUserData, addUserData }} >
      {console.log(userData)}
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path="/productlist" component={ProductList} />
      <PrivateRoute path='/profile' component={User} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
    </>
    </userContext.Provider>
  );
}

export default App;
