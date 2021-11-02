import React, { Component } from "react";
import "../../../Assets/Scss/general.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default class Paginations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  changeHandlerPagination = (e, page) => {
    console.log(e, page);
    this.setState(
      {
        currentPage: page,
      },
      () => this.props.getStatePagination(this.state.currentPage)
    );
  };

  render() {
    return (
      <Stack className="mt-5 txtCEN pagination-selected" spacing={1}>
        <Pagination
          count={2}
          shape="rounded"
          onChange={this.changeHandlerPagination}
        />
      </Stack>
    );
  }
}
