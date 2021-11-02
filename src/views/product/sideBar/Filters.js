import React, { Component } from 'react'
import '../../../Assets/Scss/general.scss'

export default class Filters extends Component {
    
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Filters</div>
                <div className='card-body , AIC' >
                    {this.props.categoriesSelected?.map(item =>
                        <span key={item} className='spanFilter FSize12 p-1 mb-2 w-auto'>{item}
                        <button type="button" onClick={()=>this.props.removeHandlerListOfProducts(item)} className="btn-close mb-2 ms-2 btn-close-white"></button>
                        <br/>
                        </span>
                    )}

                    {this.props.value[0] !== 0 || this.props.value[1] !== 400 ? <span className='spanFilter FSize12 p-1 mb-2 w-auto'>{this.props.value[0]}.00 AED - {this.props.value[1]}.00 AED
                        <button type="button" onClick={this.props.removeHandlerValueOfPrice} className="btn-close mb-2 ms-2 btn-close-white"></button>
                        <br/>
                        </span> : null
                    } 

                    {this.props.inputSearch
                        ?<span className='spanFilter FSize12 p-1 mb-2 w-auto'>{this.props.inputSearch}
                            <button type="button" onClick={this.props.removeHandlerInputSearch} className="btn-close mb-2 ms-2 btn-close-white"></button>
                            <br/>
                        </span>
                        :null
                    }

                    {this.props.PrintedSides?
                        <span className='spanFilter FSize12 p-1 mb-2 w-auto'>
                            {this.props.PrintedSides}
                            <button type="button" onClick={this.props.removeHandlerPrintedSides} className="btn-close mb-2 ms-2 btn-close-white"></button>
                            <br/>
                        </span>
                        :null
                    }

                    {this.props.TurnAround?
                        <span className='spanFilter FSize12 p-1 mb-2 w-auto'>
                            {this.props.TurnAround}
                            <button type="button" onClick={this.props.removeHandlerTurnAround} className="btn-close mb-2 ms-2 btn-close-white"></button>
                            <br/>
                        </span>
                        :null
                    }
                </div>
            </div>
        )
    }
}
