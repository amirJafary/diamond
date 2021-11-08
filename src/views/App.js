import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import ProductDetail from "./productDetail/ProductDetail";
import Products from "./product/Products";
import SignIn from "./signIn/SignIn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const token = localStorage.getItem("token");
    return (
      <Router>
        <Switch>
          <Route path="/products/productDetails/:id" component={ProductDetail}>
            {token ? <ProductDetail /> : <Redirect to="/signIn" />}
          </Route>
          <Route path="/products">
            {token ? <Products /> : <Redirect to="/signIn" />}
          </Route>
          <Route path="/signIn" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}
