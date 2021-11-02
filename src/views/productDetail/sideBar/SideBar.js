import React, { Component } from 'react'
import image from '../../../Assets/Images/download.png'
import '../../../Assets/Scss/generalProductDetail.scss'


export default class SideBar extends Component {
    render() {
        return (
            <div className='sideBar-ProductDetail'>
                <img src={image} alt='img' className='img-sideBar-ProductDetail'/>
            </div>
        )
    }
}
