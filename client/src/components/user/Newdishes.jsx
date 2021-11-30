import React, { Component } from 'react'
import a from "./images/a.jpg"
import b from "./images/b.jpg"
import c from "./images/c.jpg"

export default class Newdishes extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1 className="py-3" id="new-dishes-title">New Dishes</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-4 my-2">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={a} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4 my-2">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={a} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4 my-2">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={a} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>    
                                   
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={b} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={b} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={b} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={c} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={c} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card" style={{width: "18rem"} }>
                                        <img src={c} className="card-img-top" alt="..." height="190px"/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Veg Burger</h5>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
