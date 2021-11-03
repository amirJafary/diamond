import React, { Component } from "react";
import { getProductInfo } from "../../../../Services/GetProductInfo";
import NumberOfOrder from "./NumberOfOrder";

export default class ProductSpecification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            printCirculations:[],
            selectedId:null,
        };
        
    }

    componentDidMount() {
        getProductInfo(this.getProductInfoCallback,this.props.selectedId);
    }

    getProductInfoCallback = response => {
        this.setState({
            description:response?.description,
            name:response?.name,
            printCirculations:response?.printCirculations,
            selectedId:response?.selectedId,
        })
    };

    render() {
        console.info(this.state)
        let text='In order to print the most economical option, based on the circulation and series, please enter your required quantity.'
        return (
            <div>
                <h5 className='mb-4 fb'>{this.state.name}</h5>
                <p className='m-0 mb-2'>{this.state.description}</p>
                <p className='m-0 mb-4'> {text} </p>
                <NumberOfOrder 
                    key={this.state.selectedId}
                    seriesOfOrderStates={(quantityValue,series)=>this.props.seriesOfOrderStates(quantityValue,series)}
                    printCirculations={this.state.printCirculations}
                    selectedId={this.props.selectedId}
                    idOfCirculation={(id)=>this.props.idOfCirculation(id)}
                />
            </div>
        )
    }
}
