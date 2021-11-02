import React, { Component } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Input from "@mui/material/Input";
import "./css/general.css";
import { InputAdornment } from "@mui/material";
import axios from "axios";

class CustomDimension extends Component {
  constructor(props) {
    super(props);
    console.info("***props=", props);
    this.state = {
      anchorEl: null,
      priceOfSeries: 35,
      lat: 1,
      series: 1,
      getDimension: [],
      minHeight: this.props.minHeight,
      minWidth: this.props.minWidth,
      selectedId: null,
      turnaroundsKey: null,
      printedSidesKey: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  minus = () => {
    if (this.state.minWidth > 1)
      this.setState({
        minWidth: this.state.minWidth - 1,
      },()=>this.getDimensionFromGetBasicPriceOfMenuButton());
  };

  plus = () => {
    this.setState({
      minWidth: this.state.minWidth + 1,
    },()=>this.getDimensionFromGetBasicPriceOfMenuButton());
  };

  minus1 = () => {
    if (this.state.minHeight > 1)
      this.setState({
        minHeight: this.state.minHeight - 1,
      },()=>this.getDimensionFromGetBasicPriceOfMenuButton());
  };

  plus1 = () => {
    this.setState({
      minHeight: this.state.minHeight + 1,
    },()=>this.getDimensionFromGetBasicPriceOfMenuButton());
  };

  setStateCurrentStateWithProps = () => {
    this.setState(
      {
        minHeight: this.props.minHeight,
        minWidth: this.props.minWidth,
        selectedId: this.props.selectedId,
        turnaroundsKey: this.props.turnaroundsKey,
        printedSidesKey: this.props.printedSidesKey,
      },
      () => this.getDimensionFromGetBasicPriceOfMenuButton()
    );
  };

  // componentDidMount(){
  //   this.setStateCurrentStateWithProps()
  // }

  componentDidUpdate() {
    if (
      this.props.selectedId !== this.state.selectedId ||
      this.props.turnaroundsKey !== this.state.turnaroundsKey ||
      this.props.printedSidesKey !== this.state.printedSidesKey 
      // this.props.minHeight !== this.state.minHeight ||
      // this.props.minWidth !== this.state.minWidth
    )
      this.setStateCurrentStateWithProps();
  }

  changeHandlerHeight = e => {
    this.setState(
      {
        minHeight: Math.floor(e.target.value),
      },
      () => this.getDimensionFromGetBasicPriceOfMenuButton()
    );
  };

  changeHandlerWidth = e => {
    this.setState(
      {
        minWidth: Math.floor(e.target.value),
      },
      () => this.getDimensionFromGetBasicPriceOfMenuButton()
    );
  };

  getDimensionFromGetBasicPriceOfMenuButton = () => {
    let url =
      "https://api.diamond-press.com/api/en/Order/SharedSheetOrder/GetBasicPrice?";
    let data = {
      productId: this.state.selectedId,
      series: 1,
      turnaround: this.state.turnaroundsKey,
      twoSidePrintingType: this.state.printedSidesKey,
      width: this.state.minWidth,
      height: this.state.minHeight,
    };
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjYxNDkiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYzNDM5NTY1MCwiZXhwIjoxNjM2OTg3NjUwLCJpYXQiOjE2MzQzOTU2NTB9.UB-f-snek_aBdMj8FS54rDnEIgMiOwZYyT0bjxy4_zk`,
        },
      })
      .then(res => {
        console.info(
          "**** response get Dimension From Get Basic Price => ",
          res.data.messageItems[0].data
        );
        let basePrice=res.data.messageItems[0]?.data[0]?.basePrice
        this.setState(
          {
            getDimension: res.data.messageItems[0].data,
            priceOfSeries:basePrice
          },
          () =>
            console.info("console aaaaaaaaaaa ", basePrice)
          // },()=>
          // console.info('console aaaaaaaaaaa ',this.state.getDimension)
        );
      });
  };

  getDimensionFromGetBasicPrice = () => {
    let url =
      "https://api.diamond-press.com/api/en/Order/SharedSheetOrder/GetBasicPrice?";
    let data = {
      productId: this.state.selectedId,
      series: this.state.series,
      turnaround: this.state.turnaroundsKey,
      twoSidePrintingType: this.state.printedSidesKey,
    };
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjYxNDkiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYzNDM5NTY1MCwiZXhwIjoxNjM2OTg3NjUwLCJpYXQiOjE2MzQzOTU2NTB9.UB-f-snek_aBdMj8FS54rDnEIgMiOwZYyT0bjxy4_zk`,
        },
      })
      .then(res => {
        // console.info('**** response get Dimension From Get Basic Price => ',res.data.messageItems[0].data)
        if (!res.data.hasError) {
          this.setState(
            { getInformationOfProducts: res.data?.messageItems[0]?.data }
            // ,()=>console.info('**************this is log from res (get basic price) => **** ',res.data.messageItems[0].data)
          );
        } else {
          alert("this product not found please select other products");
        }
      });
  };

  // componentDidMount(){

  // }

  // componentDidUpdate(prevState){
  //   if(
  //     prevState.lat !== this.state.lat ||
  //     prevState.priceOfSeries !== this.state.priceOfSeries
  //   )
  //   this.getDimensionFromGetBasicPriceOfMenuButton()
  // }

  render() {
    const open = Boolean(this.state.anchorEl);
    const ariaLabel = { "aria-label": "description" };
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          className="BTN2-ProductDetail mb-4"
          aria-expanded={open ? "true" : undefined}
          onClick={event => this.handleClick(event)}
        >
          Custom Dimension Price Inquiry
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={this.state.anchorEl}
          open={open}
          className="menu-ProductDetail"
          onClose={this.handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <h6>Custom Dimension Price Inquiry</h6>
          <div>
            <span className="ms-1 fs15-ProductDetail m-20-ProductDetail">
              Width
            </span>
            <span className="ms-1 fs15-ProductDetail">Height</span>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <span className="parentInput-textFiled-ProductDetail me-2">
                <button className="BTN-ProductDetail me-2" onClick={this.minus}>
                  -
                </button>
                <Input
                  className="input-textFiled-ProductDetail"
                  value={this.state.minWidth}
                  inputProps={{ ariaLabel }}
                  onChange={e => this.changeHandlerWidth(e)}
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">mm</InputAdornment>
                  }
                />
                <button className="BTN-ProductDetail ms-2" onClick={this.plus}>
                  +
                </button>
              </span>
            </div>
            <div className="col-6">
              <span className="parentInput-textFiled-ProductDetail me-2">
                <button
                  className="BTN-ProductDetail me-2"
                  onClick={this.minus1}
                >
                  -
                </button>
                <Input
                  className="input-textFiled-ProductDetail"
                  value={this.state.minHeight}
                  inputProps={ariaLabel}
                  onChange={e => this.changeHandlerHeight(e)}
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">mm</InputAdornment>
                  }
                />
                <button className="BTN-ProductDetail ms-2" onClick={this.plus1}>
                  +
                </button>
              </span>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h6 className="bold-ProductDetail">Available Dimension(s):</h6>
            <div className="d-flex">
              <div>
                <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail">
                  Dimension (mm)
                </label>
                <br />
                {this.props.getInformationOfProducts?.map(item => {
                  return (
                    <div className="d-block w-100">
                      {item.name && (
                        <span className="px-3 py-1 TAC-ProductDetail d-block border-dimension-ProductDetail">
                          {item.name}
                          <br />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail bdr-ProductDetail">
                  Price
                </label>
                <br />
                {this.props.getInformationOfProducts?.map(item => (
                  <span className="px-3 d-block py-1 border-dimension-ProductDetail TAC-ProductDetail bdr-ProductDetail">
                    {this.state.priceOfSeries}.00 AED
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;
