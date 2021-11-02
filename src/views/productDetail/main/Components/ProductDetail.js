import React, { Component } from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import "./css/general.css";
import { withRouter } from "react-router";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    // console.info("******props*******", props);
    this.state={
      selectId:props.match.params.id
    }
  }
  render() {
    return (
      <div className="d-flex bd-ProductDetail m-5 p-2">
        <SideBar />
        <Main 
          selectId={this.state.selectId}
        />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
