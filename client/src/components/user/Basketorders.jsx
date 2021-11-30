import React, { Component } from 'react'
import a from './images/a.jpg';
import c from './images/c.jpg';

export default class Basketorders extends Component {
    render() {
        return (
            <div className="order-session container"> 
                <div className="row">

                    <div className="col-md-8 first-half py-5">
                        <h1>Your Orders</h1>
                        <div className="container item-container my-2">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={a} alt="" height="150px" width="100%" />
                                </div>
                                <div className="col-md-8">
                                    <div className="item-info">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="title text-dark">Veg Burger</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <p className="sub-tittle">FastFood</p>
                                        <i>By: SmartResto</i>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="quantity btn btn-light btn-sm my-2" data-bs-toggle="modal" data-bs-target="#quantity">
                                        Qty: 1
                                        </button>
                                        <div id="price">
                                            ₹25/-
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="container item-container my-2">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={c} alt="" height="150px" width="100%" />
                                </div>
                                <div className="col-md-8">
                                    <div className="item-info">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="title text-dark">Veg Burger</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <p className="sub-tittle">FastFood</p>
                                        <i>By: SmartResto</i>
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="quantity btn btn-light btn-sm my-2" data-bs-toggle="modal" data-bs-target="#quantity">
                                        Qty: 1
                                        </button>
                                        <div id="price">
                                            ₹25/-
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <div className="col-md-4 second-half py-5">
                        <div class="priceBlock-base-priceHeader">PRICE DETAILS (2 Items)</div>
                        <div className="priceBreakUp-base-orderSummary">
                            <div className="priceDetail-base-row my-2">
                                <span>Total Item</span>
                                <span className="priceDetail-base-value">5</span>
                            </div>
                            <div className="priceDetail-base-row my-2">
                                <span>Amount</span>
                                <span className="priceDetail-base-value">₹125/-</span>
                            </div>
                        </div>
                        <div className="totalPrice-dispplay">
                            <div className="priceDetail-base-row my-2">
                                    <span>Total Price</span>
                                    <span className="priceDetail-base-value">₹125/-</span>
                            </div>
                        </div>
                        <button className="btn btn-success mt-5 w-100">Place Order</button>
                    </div>

                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="quantity" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select Quantity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="dialogs-base-list d-flex justify-content-between">
                                <div id="1" class="dialogs-base-item">
                                    <div class="dialogs-base-display">1</div>
                                </div>
                                <div id="2" class="dialogs-base-item">
                                    <div class="dialogs-base-display">2</div>
                                </div>
                                <div id="3" class="dialogs-base-item">
                                    <div class="dialogs-base-display">3</div>
                                </div>
                                <div id="4" class="dialogs-base-item">
                                    <div class="dialogs-base-display">4</div>
                                </div>
                                <div id="5" class="dialogs-base-item">
                                    <div class="dialogs-base-display">5</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
