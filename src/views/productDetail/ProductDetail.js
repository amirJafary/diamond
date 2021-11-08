import React, { Component } from "react";
import Main from "./main/Main";
import SideBar from "./sideBar/SideBar";
import "../../Assets/Scss/generalProductDetail.scss";
import { withRouter } from "react-router";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: Math.floor(props.match?.params?.id),
    };
  }

  render() {
    console.log(this, "*-*-*-*-*-");
    return (
      <div className="d-flex bd-ProductDetail m-5 p-4">
        <SideBar />
        <Main selectedId={this.state.selectedId} />
      </div>
    );
  }
}
export default withRouter(ProductDetail);
