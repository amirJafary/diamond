import React, { Component } from 'react'
import {getPrintingFeature} from '../../../../Services/GetPrintingFeature'
import '../../../../Assets/Scss/generalProductDetail.scss'

export default class PrintFeature extends Component {

    constructor(props) {
        super(props);
        this.state={
            printedSides:[],
            turnarounds:[],
            printedSidesKey: [],
            printedSidesValue:'',
        }
    }
    
    componentDidMount(){
        getPrintingFeature(this.getPrintingFeatureCallback,this.props.selectedId);
    }

    getPrintingFeatureCallback=(response)=>{
        console.info('response is =>',response.turnarounds)
        this.setState({
            printedSides:response?.printedSides,
            turnarounds:response?.turnarounds,
        },()=>this.state.printedSides ,this.state.turnarounds)
    }

    PrintedSidesButtonClicked=(key,value)=>{
        console.info('key and value',key,value)
        this.setState({
            printedSidesKey: key,
            printedSidesValue:value
        },()=>this.props.getKeyOfPrintedSides(this.state.printedSidesKey));
    }

    render() {
        // console.info(this.state)
        return (
            <div>
                <div className="mt-3 mt-5 TAC-ProductDetail d-flex">
                    <span
                        className="ms-2 Circulation fwNORMAL fs15-ProductDetail me-2 p-3"
                    >
                        turnaround
                        <br />
                        <span className="fwBOLD ">{this.state.turnarounds[0]?.value}</span>
                    </span>
                    <span>
                    {this.state.printedSides?.length === 1 ? (
                        <div>
                            <div
                                style={{ width: "80 px", background: "#eee", borderRadius: "5px" }}
                                className="ms-2 fwnoraml fs15-ProductDetail me-2 p-3">
                                <div> Printed Sides </div>
                                
                                <div className="bold-ProductDetail">
                                    {this.state.printedSides?.map(item=>item.value)}
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
                                {this.state.printedSides?.map(item => (
                                    <button
                                        onClick={() => this.PrintedSidesButtonClicked(item.key,item.value)}
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
        )
    }
}
