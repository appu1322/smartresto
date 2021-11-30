import React, { Component } from 'react'
import c from "./images/c.jpg"

export default class Foodlist extends Component {
    constructor(){
        super();
        this.state = { data:[]};
    }


    async componentDidMount(){
        try {
            const res = await fetch('/get', {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            })
            const Data = await res.json();
            this.setState({data:Data})
            console.log(this.state.data)

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center" id="foodlist-title">Drinks</h1>
                <div className="row">
                    {this.state.data.map((element)=>{
                        return <>
                                <div className="col-md-4 my-3">
                                    <div className="card bg-light mb-3" style={{width: "18rem"}}>
                                        <img src={c} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text">{element.desc}</p>
                                            <h5 className="card-title text-center">{element.name}</h5>
                                            <h5 className="card-title text-center text-danger">₹ {element.price}/-</h5>
                                            <div className="text-center">
                                                <a href="#" className="btn btn-dark">Add in Basket</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                    })}

                </div>
            </div>
        )
    }
}
