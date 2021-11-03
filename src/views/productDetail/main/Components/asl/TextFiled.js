import React, { Component } from "react";
import "./css/general.css";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: 1000,
      series: 1,
      circulationKey: this.props.firstId,
      firstValue:1000,
      printedSidesKey: 1,
      printedSidesValue:null
    };
    console.info(this.state)
  }

  minus = () => {
    let getObjectOfPrintCirculation = this.props.printCirculations.filter(
      item => item.key === this.state.circulationKey
    );
    let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
      item => item.value
    )[0];

    if (this.state.defaultValue > this.state.firstValue)
      this.setState(
        {
          defaultValue: this.state.defaultValue - valueOfSelectedCirculation,
          series: this.state.series - 1,
        },
        () =>
          this.props.statesOfComponent(
            this.state.defaultValue,
            this.state.series
          )
      );
  };

  plus = () => {
    let getObjectOfPrintCirculation = this.props.printCirculations.filter(
      item => item.key === this.state.circulationKey
    );
    let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
      item => item.value
    )[0];

    this.setState(
      {
        defaultValue: this.state.defaultValue + valueOfSelectedCirculation,
        series: this.state.series + 1,
      },
      () =>
        this.props.statesOfComponent(this.state.defaultValue, this.state.series)
    );
  };

  minus1 = () => {
    let getObjectOfPrintCirculation = this.props.printCirculations.filter(
      item => item.key === this.state.circulationKey
    );
    let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
      item => item.value
    )[0];

    if (this.state.series > 1 )
      this.setState(
        {
          series: this.state.series - 1,
          defaultValue: this.state.defaultValue - valueOfSelectedCirculation,
        },
        () =>
          this.props.statesOfComponent(
            this.state.defaultValue,
            this.state.series
          )
        // ,()=>console.info('/*/*/*/*/*/*/*',valueOfSelectedCirculation)
      );
  };

  plus1 = () => {
    let getObjectOfPrintCirculation = this.props.printCirculations.filter(
      item => item.key === this.state.circulationKey
    );
    let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
      item => item.value
    )[0];

    this.setState(
      {
        series: this.state.series + 1,
        defaultValue:
          this.state.series * valueOfSelectedCirculation +
          valueOfSelectedCirculation,
      },
      () =>
        this.props.statesOfComponent(this.state.defaultValue, this.state.series)
    );
  };

  clickHandlerCirculationButton = (id,value) => {
    console.info('this is id of circulation = ',id,'this is value of circulation = ',value)
    this.setState({
      circulationKey: id,
      defaultValue:this.state.series*value,
      firstValue:value
    },()=>this.props.idOfCirculation(id));
    // ,()=>this.props.getStateSortById(this.state.circulationKey)
  };

  clickHandlerPrintedSidesButton=(key,value)=>{
    this.setState({
        printedSidesKey: key,
        printedSidesValue:value
      },()=>this.props.getKeyOfPrintedSides(this.state.printedSidesKey));
  }

  render() {
    // console.info(this.state.circulationKey,'***************')
    return (
        <div className="mb-5 mt-5">
        <div className="d-flex ">
            <div className=''>
                <div className="ms-1 p-0-ProductDetail m-0-ProductDetail">
                    Series
                </div>
                <span className="parentInput-textFiled-ProductDetail me-2">
                    <button className="BTN-ProductDetail me-2" onClick={this.minus1}>
                         -
                    </button>
                    <Input
                        className="input-textFiled-ProductDetail"
                        value={this.state.series}
                        inputstate={ariaLabel}
                    />
                    <button className="BTN-ProductDetail ms-2" onClick={this.plus1}>
                        +
                    </button>
                </span>
            </div>
            <div className='d-flex pt-4 AIC'>
                <span className="fs20-ProductDetail">&times;</span>
                <span>
                    {this.props.printCirculations.length === 1 ? (
                        <span
                        style={{
                            width: "80 px",
                            background: "#eee",
                            borderRadius: "5px",
                        }}
                        className="ms-2 me-2 p-3"
                        >
                        <span> Circulation </span>

                        <span className="bold-ProductDetail">
                            {this.props.printCirculations[0].value}
                        </span>
                        </span>
                    ) : (
                        <div className="bdBLACK-ProductDetail p-1 me-2 ms-2">
                        {this.props.printCirculations.map(item => (
                            <button
                            onClick={() => this.clickHandlerCirculationButton(item.key,item.value)}
                            key={item.key}
                            className={`bg-blackBtnClass px-3 py-2 ${
                                item.key === this.state.circulationKey && "activeBTN"
                            }`}
                            >
                            {item.value}
                            </button>
                        ))}
                        </div>
                    )}
                </span>
                <span className="fs20-ProductDetail me-2">=</span>
            </div>
            <div>
                <div className=" ms-1 p-0 ">
                    Quantity
                </div>
                <span className="parentInput-textFiled-ProductDetail">
                    <button
                        className="BTN-ProductDetail me-2"
                        onClick={() => this.minus(this.state.series)}
                    >
                        -
                    </button>
                    <Input
                        className="input-textFiled-ProductDetail"
                        value={this.state.defaultValue}
                        inputstate={ariaLabel}
                    />
                    <button
                        className="BTN-ProductDetail ms-2"
                        onClick={() => this.plus(this.state.series)}
                    >
                        +
                    </button>
                </span>
            </div>
        </div>
        <div className="mt-3 mt-5 TAC-ProductDetail d-flex">
            <span
                style={{ width: "80 px", background: "#eee", borderRadius: "5px" }}
                className="ms-2 fwNORMAL fs15-ProductDetail me-2 p-3"
            >
                turnaround
                <br />
                <span className="fwBOLD ">{this.props.turnarounds}</span>
            </span>
            <span>
              {this.props.printedSides.length === 1 ? (
                <div>
                    <div
                        style={{ width: "80 px", background: "#eee", borderRadius: "5px" }}
                        className="ms-2 fwNORMAL fs15-ProductDetail me-2 p-3"
                    >
                        <div> Printed Sides </div>
                        
                        <div className="bold-ProductDetail">
                            {this.props.printedSides.map(item=>item.value)}
                        </div>
                    </div>
                </div>
              ) 
              : 
                <div className='ms-5'>
                    <div
                        className="ms-3 fwNORMAL TAS fs15-ProductDetail me-2 pb-2 "
                    >
                        printedSides
                    <br />
                    </div>
                    <div className="bdBLACK-ProductDetail p-1 me-2 ms-2">
                        {this.props.printedSides.map(item => (
                            <button
                                onClick={() => this.clickHandlerPrintedSidesButton(item.key,item.value)}
                                key={item.key}
                                className={`bg-blackBtnClass px-3 py-2 ${
                                    item.key === this.state.printedSidesKey && "activeBTN"
                                }`}
                            >
                                {item.value}
                            </button>
                        ))}
                    </div>
                </div>
              }
            </span>
          
        </div>
        </div>
    );
  }
}
