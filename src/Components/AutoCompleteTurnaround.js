import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Assets/Scss/general.scss'

export default class AutoCompleteTurnaround extends Component {

    constructor(props) {
        super(props);
        this.state={
            optionsOfTurnaround:[
                { title:'Normal' , id:1 ,},
                { title:'Express' , id:2 ,},
            ],
            TurnAround:'',
            IdOfTurnAround:null,
        }
    }

    changeHandlerInputTurnaround=(e)=>{
        let valueOfTurnaround=e.target.innerText
        let filter=this.state.optionsOfTurnaround.filter(item=> item.title===valueOfTurnaround)[0]
        this.setState({
            TurnAround:e.target.innerText,
            IdOfTurnAround:!!filter ?filter.id :null
        },()=>this.props.getStateTurnAround(this.state.TurnAround , this.state.IdOfTurnAround))
        // ,()=>this.props.getStateOfTurnAround(this.state.TurnAround , this.state.IdOfTurnAround))
    }

    render() {

        let defaultProps = {
            options:this.state.optionsOfTurnaround,
            getOptionLabel: (option) => option.title,
        };
        
        return (
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                onChange={(e)=>this.changeHandlerInputTurnaround(e)}
                disableCloseOnSelect
                className='mt-2'
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        label="Turnaround"
                        variant="standard"
                    />
                )}
            />
        )
    }
}

