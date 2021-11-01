import React, { Component } from 'react'
import Main from './main/Main'
import SideBar from './sideBar/SideBar'

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state={
        
    }
  }
  
  render() {
    return (
      <div>
        <SideBar/>
        <Main/>
      </div>
    )
  }
}
