import React, { Component } from 'react'
import Paginations from './Paginations'
import Products from './Products'
import SortBy from './SortBy'
import '../../../Assets/Scss/general.scss'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state={
            sortById:2,
            currentPage:1,
            selectedId:null
        }
        console.info(this.state)
    }

    getStateSortById=(sortById)=>{
        this.setState({
            sortById:sortById
        })
    }

    getStatePagination=(currentPage)=>{
        this.setState({
            currentPage:currentPage
        })
    }
    
    render() {
        return (
            <div className='Main'>
                <SortBy
                    getStateSortById={(sortById)=>this.getStateSortById(sortById)}
                />
                <Products
                    categoriesSelected={this.props.categoriesSelected}
                    inputSearch={this.props.inputSearch}
                    value={this.props.value}
                    IdOfTurnAround={this.props.IdOfTurnAround}
                    IdOfPrintedSides={this.props.IdOfPrintedSides}
                    categoriesSelectedID={this.props.categoriesSelectedID}
                    categoriesList={this.props.categoriesList}
                    sortById={this.state.sortById}
                    currentPage={this.state.currentPage}
                    getSelectIdOfProduct={(selectedId)=>this.props.getSelectIdOfProduct(selectedId)}
                />
                <Paginations
                    getStatePagination={(currentPage)=>this.getStatePagination(currentPage)}
                />
            </div>
        )
    }
}
