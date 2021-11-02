import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';
import '../Assets/Scss/general.scss'

export default class Checkboxs extends Component {

    constructor(props) {
        super(props);
        this.state={
            isChecked:false
        }
    }

    changeHandlerCheckbox=(isChecked)=>{
        this.setState({isChecked:isChecked}
            ,()=>this.props.getStateIsChecked(this.state.isChecked))
    }
    
    render() {
        return (
            <div>
                <Checkbox 
                    className='checkbox'
                    checked={this.props.isChecked} 
                    size="small" 
                    color='secondary'
                    onChange={(e)=>this.changeHandlerCheckbox(e.target.checked)}
                />
            </div>
        )
    }
}
