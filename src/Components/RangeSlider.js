import * as React from 'react';
import Slider from '@material-ui/core/Slider';
import '../Assets/Scss/general.scss'

export default class RangeSlider extends React.Component {

  constructor(props) {
    
    super(props);
    this.state={
      value:[0,400]
    }
  }
  
  valueText=(value) =>`${value}`;

  changeHandlerRangeSliderPrice=(e,value)=>{
    this.setState({
      value:value
    },()=>this.props.getStateValue(this.state.value))
    // ,()=>this.props.getStateValue(this.state.value)
  }

  render(){
    return (
      <div className='TAC'>
        <Slider
          className='width90'
          min={0}
          size='small'
          color='secondary'
          max={400}
          value={this.props.value}
          onChange={(e,value)=>this.changeHandlerRangeSliderPrice(e,value)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={this.valueText}
        />
      </div>
    );
  }
}
