import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./productDetail/ProductDetail";
import Products from "./product/Products";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
        
    }
  }
   
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/product" component={Products} />
        </Switch>
      </Router>
    );
  }
}
