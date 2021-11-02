import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./productDetail/ProductDetail";
import Products from "./product/Products";
import {getProductInfo} from '../Services/GetProductInfo'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    getProductInfo(this.getProductInfoCallback)
  }

  getProductInfoCallback=(response)=>{
    console.info('*******',response)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product" component={Products} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}
