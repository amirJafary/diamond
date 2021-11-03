import React, { Component } from 'react'
import Filters from './Filters'
import Categories from './Categories'
import Options from './Options'
import PriceSlider from './PriceSlider'
import Search from './Search'
import '../../../Assets/Scss/general.scss'

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputSearch:'',
            value:[0,400],
            TurnAround:'',
            IdOfTurnAround:null,
            PrintedSides:'',
            IdOfPrintedSides:null,
            categoriesSelected:[],
            categoriesSelectedID:[],
            categoriesList:[],
        }
    }

    StatesOFSideBar=()=>this.props.StatesOFSideBar(
        this.state.categoriesSelected,
        this.state.inputSearch,
        this.state.value,
        this.state.IdOfTurnAround,
        this.state.IdOfPrintedSides,
        this.state.categoriesSelectedID,
        this.state.categoriesList,
    );

    removeHandlerListOfProducts=(item)=>{
        let deleteName=this.state.categoriesSelected?.filter(name=>name!==item)
        let filterNames=this.state.categoriesList.filter(product=>product.name===item)
        let deleteId=this.state.categoriesSelectedID.filter(id=>id!==filterNames[0]?.id)
        this.setState({
            categoriesSelected:deleteName,
            categoriesSelectedID:deleteId
        },()=>this.StatesOFSideBar())
    }

    removeHandlerValueOfPrice=()=>{
        this.setState({
            value:[0,400]
        },()=>this.StatesOFSideBar())
    }
    
    removeHandlerInputSearch=()=>{
        this.setState({
            inputSearch:''
        },()=>this.StatesOFSideBar())
    }

    removeHandlerPrintedSides=()=>{
        this.setState({
            PrintedSides:'',
            IdOfPrintedSides:null,
        },()=>this.StatesOFSideBar())
    }
  
    removeHandlerTurnAround=()=>{
        this.setState({
            TurnAround:'',
            IdOfTurnAround:null,
        },()=>this.StatesOFSideBar())
    }
    
    getStateInputSearch=(inputSearch)=>{
        this.setState({
            inputSearch:inputSearch
        },()=>this.StatesOFSideBar())
    }

    getStateValue=(value)=>{
        this.setState({
            value:value
        },()=>this.StatesOFSideBar())
    }

    getStateTurnAround=(TurnAround , IdOfTurnAround)=>{
        this.setState({
            TurnAround:TurnAround,
            IdOfTurnAround:IdOfTurnAround
        },()=>this.StatesOFSideBar())
    }

    getStatePrintedSides=(PrintedSides , IdOfPrintedSides)=>{
        this.setState({
            PrintedSides:PrintedSides,
            IdOfPrintedSides:IdOfPrintedSides
        },()=>this.StatesOFSideBar())
    }

    getStateCategories=(categoriesSelected , categoriesSelectedID , categoriesList)=>{
        this.setState({
            categoriesSelected:categoriesSelected,
            categoriesSelectedID:categoriesSelectedID,
            categoriesList:categoriesList,
        },()=>this.StatesOFSideBar())
    }
    
    render() {
        return (
            <div className='SideBar'>
                <Filters
                    categoriesSelected={this.state.categoriesSelected}
                    inputSearch={this.state.inputSearch}
                    value={this.state.value}
                    TurnAround={this.state.TurnAround}
                    PrintedSides={this.state.PrintedSides}
                    categoriesList={this.state.categoriesList}
                    removeHandlerListOfProducts={(item)=>this.removeHandlerListOfProducts(item)}
                    removeHandlerValueOfPrice={this.removeHandlerValueOfPrice}
                    removeHandlerInputSearch={this.removeHandlerInputSearch}
                    removeHandlerPrintedSides={this.removeHandlerPrintedSides}
                    removeHandlerTurnAround={this.removeHandlerTurnAround}
                />
                <Categories
                    categoriesSelected={this.state.categoriesSelected}
                    categoriesSelectedID={this.state.categoriesSelectedID}
                    getStateCategories={(categoriesSelected , categoriesSelectedID , categoriesList)=>this.getStateCategories(categoriesSelected , categoriesSelectedID , categoriesList)}
                />
                <Search
                    inputSearch={this.state.inputSearch}
                    getStateInputSearch={(inputSearch)=>this.getStateInputSearch(inputSearch)}
                />
                <PriceSlider
                    getStateValue={(value)=>this.getStateValue(value)}
                    value={this.state.value}
                />
                <Options
                    TurnAround={this.state.TurnAround}
                    PrintedSides={this.state.PrintedSides}
                    getStatePrintedSides={(PrintedSides , IdOfPrintedSides)=>this.getStatePrintedSides(PrintedSides , IdOfPrintedSides)}
                    getStateTurnAround={(TurnAround , IdOfTurnAround )=>this.getStateTurnAround(TurnAround , IdOfTurnAround)}
                />
            </div>
        )
    }
}
