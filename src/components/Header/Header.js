import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='headerContainer'>
                <div className='logo'>
                BuyStuff
                </div>
                <div className='cart'>Cart</div>
                <div className='loginUser'>Login</div>
            </div>
        )
    }
}
