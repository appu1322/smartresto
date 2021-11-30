import React, { Component } from 'react'
import { Link } from "react-router-dom";
import qualityImg from './images/quality.jpg';

export default class BasketNav extends Component {
    render() {
        return (
            <div className="basket-session container-fluid">
                <div className="nav d-flex justify-content-between align-items-center bg-light">
                    <Link className="title text-success" to="/">Smart Resto</Link>
                    <ol className="checkout-steps p-0 m-0">
                        <li className="step step1">Order</li>
                        <li class="divider"></li>
                        <li className="step step2">Serve</li>
                        <li class="divider"></li>
                        <li className="step step3">You love it</li>
                    </ol>
                    <div className="quality">
                        <img src={qualityImg} alt="" width="40px" height="40px" />
                        100% Quality
                    </div>
                </div>
            </div>
        )
    }
}
