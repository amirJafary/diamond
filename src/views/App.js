import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./productDetail/ProductDetail";
import Products from "./product/Products";
import {GetBasicPriceCustomizeDemission} from '../Services/GetBasicPriceCustomizeDemission'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    GetBasicPriceCustomizeDemission(this.GetBasicPriceCustomizeDemissionCallback)
  }

  GetBasicPriceCustomizeDemissionCallback=(response)=>{
    console.info('*******GetBasicPriceCustomizeDemissionCallback*******',response)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products/productDetails/:id" component={ProductDetail} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    );
  }
}
