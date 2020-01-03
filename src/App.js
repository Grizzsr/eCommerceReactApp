import React from 'react';
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './components/redux/reducer'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Item from './components/Item/Item';
import UserLogin from './components/UserLogin';
import ProductCategories from './components/ProductCategories/ProductCategories';


const store = createStore(reducer, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

class App extends React.Component {
  render() {
    return (
     
      <div>
        <Header />
        <ProductCategories />
        <Products />
        <Item />
        <UserLogin />
      </div>
    )
  }
}

export default App;
