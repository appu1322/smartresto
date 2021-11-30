import React, { Component } from 'react'
import home from "./images/home4.jpg"

export default class Home extends Component {
    scrollDown(){
        let winSize = document.getElementById("home-session");
        window.scrollTo({top:winSize.offsetHeight, behaviour:'smooth'})
    }
    render() {
        return (
            <div>
                <div id="home-session">
                    <img src={home} alt="" />
                    <div className="container">
                        <h1>Its an even better <span className="text-success">than an expensive cookery book</span> </h1>
                        <p>Here you will experience best flavours.</p>
                        <button type="button" className="btn btn-success" onClick={this.scrollDown}>Learn more</button>
                    </div>
                </div>
            </div>
        )
    }
}
