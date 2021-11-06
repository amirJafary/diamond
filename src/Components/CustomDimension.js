import React, { Component } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Input from "@mui/material/Input";
import "../Assets/Scss/generalProductDetail.scss";
import { InputAdornment } from "@mui/material";
import { GetBasicPriceCustomizeDemission } from "../Services/GetBasicPriceCustomizeDemission";

class CustomDimension extends Component {
  constructor(props) {
    super(props);
    console.info("***props=", props);
    this.state = {
      anchorEl: null,
      priceOfSeries: 35,
      lat: 1,
      series: 1,
      customDimensionInfo: [],
      minHeight: this.props.height,
      minWidth: this.props.width,
      selectedId: this.props.selectedId,
      turnaroundsKey: 1,
      printedSidesKey: 2,
    };
    console.info(this.state);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  minusWidth = () => {
    if (this.state.minWidth > 1)
      this.setState(
        {
          minWidth: this.state.minWidth - 1,
        },
        () => this.GetBasicPriceCustomizeDemissionCallback()
      );
  };

  plusWidth = () => {
    this.setState(
      {
        minWidth: this.state.minWidth + 1,
      },
      () => this.GetBasicPriceCustomizeDemissionCallback()
    );
  };

  minusHeight = () => {
    if (this.state.minHeight > 1)
      this.setState(
        {
          minHeight: this.state.minHeight - 1,
        },
        () => this.GetBasicPriceCustomizeDemissionCallback()
      );
  };

  plusHeight = () => {
    this.setState(
      {
        minHeight: this.state.minHeight + 1,
      },
      () => this.GetBasicPriceCustomizeDemissionCallback()
    );
  };

  setStateCurrentStateWithProps = () => {
    this.setState(
      {
        minHeight: this.props.minHeight,
        minWidth: this.props.minWidth,
      },
      () => this.GetBasicPriceCustomizeDemissionCallback()
    );
  };

  HeightChanged = e => {
    this.setState(
      {
        minHeight: Math.floor(e.target.value),
      },
      () => this.GetBasicPriceCustomizeDemissionCallback()
    );
  };

  WidthChanged = e => {
    this.setState(
      {
        minWidth: Math.floor(e.target.value),
      },
      () => this.GetBasicPriceCustomizeDemissionCallback()
    );
  };

  componentDidMount() {
    this.setStateCurrentStateWithProps();
    GetBasicPriceCustomizeDemission(
      this.GetBasicPriceCustomizeDemissionCallback,
      this.state.selectedId,
      this.state.turnaroundsKey,
      this.state.printedSidesKey,
      this.state.minWidth,
      this.state.minHeight
    );
  }

  componentDidUpdate(prevState) {
    if (
      prevState.minWidth  !== this.state.minWidth ||
      prevState.minHeight !== this.state.minHeight ||
      prevState.selectedId !== this.state.selectedId ||
      // prevState.turnaroundsKey !== this.state.turnaroundsKey ||
      prevState.printedSidesKey !== this.state.printedSidesKey 
    )
    GetBasicPriceCustomizeDemission(
      this.GetBasicPriceCustomizeDemissionCallback,
      this.state.selectedId,
      this.state.turnaroundsKey,
      this.state.printedSidesKey,
      this.state.minWidth,
      this.state.minHeight
    )
  }

  GetBasicPriceCustomizeDemissionCallback = response => {
    console.info("****************************************", response);
    // let price = response?.map(item=>item?.basePrice)[0]
    this.setState(
      {
        customDimensionInfo: response,
        // priceOfSeries:price
      },
      () => console.info()
    );
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    const ariaLabel = { "aria-label": "description" };
    console.info(
      "***this.state.customDimensionInfo =",
      this.state.customDimensionInfo
    );
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
                <button
                  className="BTN-ProductDetail me-2"
                  onClick={this.minusWidth}
                >
                  -
                </button>
                <Input
                  className="input-textFiled-ProductDetail"
                  value={this.state.minWidth}
                  inputProps={{ ariaLabel }}
                  onChange={e => this.WidthChanged(e)}
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">mm</InputAdornment>
                  }
                />
                <button
                  className="BTN-ProductDetail ms-2"
                  onClick={this.plusWidth}
                >
                  +
                </button>
              </span>
            </div>
            <div className="col-6">
              <span className="parentInput-textFiled-ProductDetail me-2">
                <button
                  className="BTN-ProductDetail me-2"
                  onClick={this.minusHeight}
                >
                  -
                </button>
                <Input
                  className="input-textFiled-ProductDetail"
                  value={this.state.minHeight}
                  inputProps={ariaLabel}
                  onChange={e => this.HeightChanged(e)}
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">mm</InputAdornment>
                  }
                />
                <button
                  className="BTN-ProductDetail ms-2"
                  onClick={this.plusHeight}
                >
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
                {this.props.availableDimensions?.map(item => {
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
                {this.state.customDimensionInfo?.map(item => (
                  <span className="px-3 d-block py-1 border-dimension-ProductDetail TAC-ProductDetail bdr-ProductDetail">
                    {item.basePrice}.00 AED
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

export default CustomDimension;
