import React, { Component } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import Newdishes from './Newdishes'
import Foodlist from './Food/Foodlist'

export default class User extends Component {
    render() {
        let {category} = this.props;
        return (
            <div>
                <NavBar/>
                <Home/>
                <Newdishes/>
                <Foodlist subcategory={category}/>
            </div>
        )
    }
}
