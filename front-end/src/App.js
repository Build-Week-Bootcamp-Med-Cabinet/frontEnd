import React, { useState, useEffect } from 'react';
import './App.css';

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
    <userContext.Provider value= {{ addData, weedData }}>
    <div className="App">
    {/* <Login /> */}
    <Register />
    </div>
    </userContext.Provider>
  );
}

export default App;
