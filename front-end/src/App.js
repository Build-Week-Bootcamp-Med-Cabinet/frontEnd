import React, { useState } from 'react';
import './App.css';
import { Header, Home, ProductList } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
import userContext from './contexts/index';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [ weedData, setWeedData] = useState([]);
  const addData = item => {
    setWeedData([...weedData, item])
  };
  // useEffect(() => {
  //   axios
  //     .get('https://med-cabinet-development.herokuapp.com/')
  //     .then(res => {
  //       console.log('res.data in app.js', res.data);
  //       setWeedData(res.data);
  //     })
  // }, [])

  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path="/productlist" component={ProductList} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
    </>
  );
}

export default App;
