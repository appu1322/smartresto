import React from 'react'
import a from '../images/a.jpg';


function BasketItem(props) {
    const { element, removeFood, handleCurrentId } = props
    return (
        <div>
            <div className="container item-container my-2">
                <div className="row">
                    <div className="col-md-4">
                        <img src={a} alt="" height="150px" width="100%" />
                    </div>
                    <div className="col-md-8">
                        <div className="item-info">
                            <div className="d-flex justify-content-between">
                                <h5 className="title text-dark">{element.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => removeFood(element.id)}></button>
                            </div>
                            <p className="sub-tittle">{element.subcategory} ( {element.category} )</p>
                            <i>By: SmartResto</i>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="quantity btn btn-light btn-sm my-2" data-bs-toggle="modal" data-bs-target="#quantity" onClick={() => handleCurrentId(element.id)}>
                                Qty: {element.qty}
                            </button>
                            <div id="price">
                                ₹{element.price}/-
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem