import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./productDetail/ProductDetail";
import Products from "./product/Products";
import SignIn from "./signIn/SignIn";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products/productDetails/:id" component={ProductDetail} />
          <Route path="/products" component={Products} />
          <Route path="/signIn" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}
