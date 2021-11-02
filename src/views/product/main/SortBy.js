import React, { Component } from 'react'
import '../../../Assets/Scss/general.scss'

export default class SortBy extends Component {

    constructor(props) {
        super(props);
        this.state={
            options:[
                {id:4 ,name:'Newest'},
                {id:3 ,name:'Best Selling'},
                {id:1 ,name:'Lowest Price'},
                {id:2 ,name:'Highest Price'},
            ],
            sortById:2
        }
    }

    clickHandlerSortButton=(id)=>{
        this.setState({
            sortById:id
        },()=>this.props.getStateSortById(this.state.sortById))
    }

    render() {
        return (
            <div className='d-flex mb-3 SortBy'>
                {this.state.options.map(item=>
                    <button 
                        onClick={()=>this.clickHandlerSortButton(item.id)} 
                        key={item.id} 
                        className={`BTN ${item.id === this.state.sortById && "active"}`}
                    >
                        {item.name}
                    </button>
                )}
            </div>
        )
    }
}
