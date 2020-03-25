import React from 'react';
import './App.css';
import { Header, Home } from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    
    <Route path="/" component={Home} />
    </>
  );
}

export default App;
