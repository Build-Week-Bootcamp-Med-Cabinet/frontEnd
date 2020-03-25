import React from 'react';
import './App.css';
import { Header, Home, ProductList } from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    
    <Route exact path="/" component={Home} />
    <Route path="/productlist" component={ProductList} />
    </>
  );
}

export default App;
