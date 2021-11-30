import React, { Component } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import Newdishes from './Newdishes'
import Foodlist from './Foodlist'

export default class User extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Home/>
                <Newdishes/>
                <Foodlist/>
            </div>
        )
    }
}
