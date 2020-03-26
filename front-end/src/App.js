import React from 'react';
import './App.css';
import { Header, Home, ProductList } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/productlist" component={ProductList} />
    </Switch>
    </>
  );
}

export default App;
