import React, { Component } from 'react'
import RangeSlider from '../../../Components/RangeSlider'
import '../../../Assets/Scss/general.scss'

export default class Price extends Component {

    constructor(props) {
        console.info(props)
        super(props);
        this.state={

        }
    }
    
    
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Price</div>
                <div className='card-body txtCEN AIC' >
                    <label 
                        for="customRange1" 
                        className="form-label FSize12 mb-4"
                    >
                        {this.props.value[0]}.00 AED - {this.props.value[1]}.00 AED
                    </label>
                    <RangeSlider 
                        getStateValue={(value)=>this.props.getStateValue(value)}
                        value={this.props.value}
                    />
                </div>
            </div>
        )
    }
}
