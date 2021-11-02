import React, { Component } from 'react'
import AutoCompletePrintedSides from '../../../Components/AutoCompletePrintedSides'
import AutoCompleteTurnaround from '../../../Components/AutoCompleteTurnaround'
import '../../../Assets/Scss/general.scss'

export default class Options extends Component {
    
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Options</div>
                <div className='card-body , AIC' >
                    <AutoCompletePrintedSides
                        getStatePrintedSides={(PrintedSides , IdOfPrintedSides)=>this.props.getStatePrintedSides(PrintedSides , IdOfPrintedSides)}
                        PrintedSides={this.props.PrintedSides}
                    />
                    <AutoCompleteTurnaround
                        getStateTurnAround={(TurnAround , IdOfTurnAround )=>this.props.getStateTurnAround(TurnAround , IdOfTurnAround)}
                        TurnAround={this.props.TurnAround}
                    />
                </div>
            </div>
        )
    }
}
