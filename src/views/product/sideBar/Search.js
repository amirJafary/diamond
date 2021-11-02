import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../../../Assets/Scss/general.scss'

export default class SearchInResult extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputSearch:'',
        }
    }

    changeHandlerSearchInput=(e)=>{
        this.setState({
            inputSearch:e.target.value,
        },()=>this.props.getStateInputSearch(this.state.inputSearch))
        // ,()=>console.info(this.state.InputSearch)
    }
    
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Search in Result</div>
                <div className='card-body , AIC' >
                    <input 
                        type='text' 
                        className='inputSearch'
                        value={this.props.inputSearch}
                        placeholder='search in products...'
                        onChange={(e)=>this.changeHandlerSearchInput(e)}
                    />
                    <span className='SearchIcon' >
                        <SearchIcon/>
                    </span>
                </div>
            </div>
        )
    }
}
