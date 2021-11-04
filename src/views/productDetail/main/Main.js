import React, { Component } from 'react'
import ProductSpecification from './Components/ProductSpecification'
import PrintFeature from './Components/PrintFeature'
import Dimension from './Components/Dimension'
import CustomDimension from './Components/CustomDimension'
import '../../../Assets/Scss/generalProductDetail.scss'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedId:this.props.selectedId,
            quantityValue:1000,
            series:1,
            idOfCirculation:null,
            printedSidesKey:null,
        }
    }

    seriesOfOrderStates=(quantityValue,series)=>{
        this.setState({
            quantityValue:quantityValue,
            series:series
        })
    }

    idOfCirculation=(id)=>{
        console.info('id Of Circulation',id)
        this.setState({
            idOfCirculation:id
        })
    }

    getKeyOfPrintedSides=(printedSidesKey)=>{
        this.setState({
            printedSidesKey:printedSidesKey
        })
    }
    
    render() {
        return (
            <div className="main-ProductDetail ms-2">
                <ProductSpecification
                    selectedId={this.state.selectedId}
                    seriesOfOrderStates={(quantityValue,series)=>this.seriesOfOrderStates(quantityValue,series)}
                    idOfCirculation={(id)=>this.idOfCirculation(id)}
                />
                <PrintFeature
                    selectedId={this.state.selectedId}
                    getKeyOfPrintedSides={printedSidesKey =>this.getKeyOfPrintedSides(printedSidesKey)}
                />
                <Dimension
                
                />
                <CustomDimension
                
                />
            </div>
        )
    }
}
