import React, { Component } from "react";
import { getProductInfo } from "../../../../Services/GetProductInfo";

export default class ProductSpecification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            printCirculations:[],
            selectedId:null
        };
    }

    componentDidMount() {
        getProductInfo(this.getProductInfoCallback);
    }

    getProductInfoCallback = response => {
        console.info("*******", response);
        this.setState({
            description:response?.description,
            name:response?.name,
            printCirculations:response?.printCirculations,
            selectedId:response?.selectedId,
        },()=>console.table(this.state))
    };

    render() {
        return (
            <div>
                <h5>{this.state.name}</h5>
            </div>
        )
    }
}
