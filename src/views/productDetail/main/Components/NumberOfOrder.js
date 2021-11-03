import React, { Component } from 'react'
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default class NumberOfOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantityValue: 1000,
            series: 1,
            circulationKey: this.props.selectedId,
            firstValue:1000,
            printedSidesKey: 1,
            printedSidesValue:null
        };
        console.info(this.props.selectedId)
    }

    // set first value of Quantity

    getFirstValueForInputQuantity=()=>{
        let getObjectOfPrintCirculation = this.props.printCirculations?.filter(
            item => item.key === this.props.selectedId
        );
        let valueOfSelectedCirculation = getObjectOfPrintCirculation?.map(
            item => item.value
        )[0];

        this.setState({
            quantityValue:valueOfSelectedCirculation,
            firstValue:valueOfSelectedCirculation
        },()=>
            this.props.seriesOfOrderStates(
                this.state.quantityValue,
                this.state.series
            )
        )
    }

    componentDidMount(){
        this.getFirstValueForInputQuantity()
    }

    // minus value of Quantity

    minusQuantity = () => {
        let getObjectOfPrintCirculation = this.props.printCirculations.filter(
            item => item.key === this.state.circulationKey
        );
        let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
            item => item.value
        )[0];
    
        if (this.state.quantityValue > this.state.firstValue)
        this.setState(
            {
                quantityValue: this.state.quantityValue - valueOfSelectedCirculation,
                series: this.state.series - 1,
            },
            () =>
                this.props.seriesOfOrderStates(
                    this.state.quantityValue,
                    this.state.series
                )
        );
    };

    // plus value of Quantity
    
    plusQuantity = () => {
        let getObjectOfPrintCirculation = this.props.printCirculations?.filter(
            item => item.key === this.state.circulationKey
        );
        let valueOfSelectedCirculation = getObjectOfPrintCirculation?.map(
            item => item.value
        )[0];

        this.setState(
            {
                quantityValue: this.state.quantityValue + valueOfSelectedCirculation,
                series: this.state.series + 1,
            },
            () =>
                this.props.seriesOfOrderStates(
                    this.state.quantityValue, 
                    this.state.series
                ),
                this.getFirstValueForInputQuantity()
        );
    };

    // minus value of Series
    
    minusSeries = () => {
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
                quantityValue: this.state.quantityValue - valueOfSelectedCirculation,
            },
            () =>
                this.props.seriesOfOrderStates(
                    this.state.quantityValue,
                    this.state.series
                )
        );
    };

    // plus value of Series
    
    plusSeries = () => {
        let getObjectOfPrintCirculation = this.props.printCirculations.filter(
            item => item.key === this.state.circulationKey
        );
        let valueOfSelectedCirculation = getObjectOfPrintCirculation.map(
            item => item.value
        )[0];
    
        this.setState(
            {
                series: this.state.series + 1,
                quantityValue:
                this.state.series * valueOfSelectedCirculation +
                valueOfSelectedCirculation,
            },
            () =>
                this.props.seriesOfOrderStates(this.state.quantityValue, this.state.series)
        );
    };

    // get value and key of circulation (click Handler Circulation) 
    
    clickHandlerCirculationButton = (id,value) => {
        console.info('this is id of circulation = ',id,'this is value of circulation = ',value)
        this.setState({
            circulationKey: id,
            quantityValue:this.state.series*value,
            firstValue:value
        },()=>this.props.idOfCirculation(id));
    };

    render() {
        return (
            <div>
                <div className="d-flex ">
                    <div className='me-2'>
                        <div className=" ms-1 p-0 ">
                            Quantity
                        </div>
                        <span className="parentInput-textFiled-ProductDetail">
                            <button
                                className="BTN-ProductDetail me-2"
                                onClick={() => this.minusQuantity(this.state.series)}
                            >
                                -
                            </button>
                            <Input
                                className="input-textFiled-ProductDetail"
                                value={this.state.quantityValue}
                                inputstate={ariaLabel}
                            />
                            <button
                                className="BTN-ProductDetail ms-2"
                                onClick={() => this.plusQuantity(this.state.series)}
                            >
                                +
                            </button>
                        </span>
                    </div>
                    <div className='d-flex pt-4 AIC'>
                        <span className="fs20-ProductDetail">&times;</span>
                        <span>
                            {this.props.printCirculations?.length === 1 ? (
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
                                    {this.props.printCirculations[0]?.value}
                                </span>
                                </span>
                            ) 
                            :(
                                <div className="bdBLACK-ProductDetail p-1 me-2 ms-2">
                                {this.props.printCirculations?.map(item => (
                                    <button
                                    onClick={() => this.clickHandlerCirculationButton(item.key,item.value)}
                                    key={item.key}
                                    className={`bg-blackBtnClass px-4 py-2 ${
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
                    <div className=''>
                        <div className="ms-1 p-0-ProductDetail m-0-ProductDetail">
                            Series
                        </div>
                        <span className="parentInput-textFiled-ProductDetail me-2">
                            <button className="BTN-ProductDetail me-2" onClick={this.minusSeries}>
                                -
                            </button>
                            <Input
                                className="input-textFiled-ProductDetail"
                                value={this.state.series}
                                inputstate={ariaLabel}
                            />
                            <button className="BTN-ProductDetail ms-2" onClick={this.plusSeries}>
                                +
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
