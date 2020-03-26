import React from 'react';
import './App.css';
import { Header, Home, ProductList } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/productlist" component={ProductList} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
    </>
  );
}

export default App;
