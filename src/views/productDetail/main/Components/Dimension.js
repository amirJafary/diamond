import React, { Component } from "react";
import "../../../../Assets/Scss/generalProductDetail.scss";
import {GetDimensionFromGetBasicPrice} from '../../../../Services/GetDimensionFromGetBasicPrice'
import CustomDimension from "../../../../Components/CustomDimension"

class Dimension extends Component {

    constructor(props) {
        super(props);
        // console.info('they are props for dimension component',props)
        this.state={
            availableDimensions:[],
            selectedId:this.props.selectedId,
            printedSidesKey:this.props.printedSidesKey,
            series:this.props.series,
            productInfo:[],
            width:null,
            height:null,
        }
    }

    componentDidMount(){
        GetDimensionFromGetBasicPrice(this.GetDimensionFromGetBasicPriceCallback,this.state.selectedId,this.state.printedSidesKey,this.state.series)
    }

    componentDidUpdate(){
        if(
            this.state.selectedId !== this.props.selectedId ||
            this.state.printedSidesKey !== this.props.printedSidesKey ||
            this.state.series !== this.props.series
        ){
            this.setState({
                selectedId:this.props.selectedId,
                printedSidesKey:this.props.printedSidesKey,
                series:this.props.series,
            },()=>{
                GetDimensionFromGetBasicPrice(
                    this.GetDimensionFromGetBasicPriceCallback,
                    this.state.selectedId,
                    this.state.printedSidesKey,
                    this.state.series
                )
            })
        }
    }

    GetDimensionFromGetBasicPriceCallback=(response)=>{
        this.setState({
            availableDimensions:response,
            width:response[0]?.width,
            height:response[0]?.height,
        })
    }

    render() {
        // console.info(this.props)
        // console.info(this.props.getInformationOfProducts[0]?.isCustomizableDimension)
        return (
            <div className=" mb-5">
                <h6 className="bold-ProductDetail">Available Dimension(s):</h6>
                <div className="d-flex">
                    <div>
                        <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail">
                            Dimension (mm)
                        </label>
                        <br />
                        {this.state.availableDimensions?.map(item => {
                            return (
                                <div className='d-block w-100'>
                                    {item.name&&<span className="px-3 py-2 TAC-ProductDetail d-block border-dimension-ProductDetail">{item.name} ({item.width}*{item.height} mm)<br /></span>}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail bdr-ProductDetail">
                            Price
                        </label>
                        <br />
                        {this.state.availableDimensions?.map(item=>
                            <span className="px-3 d-block py-2 border-dimension-ProductDetail TAC-ProductDetail bdr-ProductDetail">
                                {item.basePrice}.00 AED
                            <br />
                            </span>
                        )}
                    </div>
                </div>
                {!!this.state.availableDimensions[0]?.isCustomizableDimension &&
                    <CustomDimension
                        minHeight={this.state.height}
                        minWidth={this.state.width}
                        selectedId={this.props.selectedId}
                        turnaroundsKey={this.props.turnaroundsKey}
                        printedSidesKey={this.props.printedSidesKey}
                        availableDimensions={this.state.availableDimensions}
                    />
                }
                <br />
                <button className="BTN3-ProductDetail"> start ordering </button>
            </div>
        );
    }
}

export default Dimension;
