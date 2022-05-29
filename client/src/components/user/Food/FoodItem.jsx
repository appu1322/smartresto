import React from 'react'
import c from "../images/c.jpg"


function FoodItem(props) {
    const {element, addFood} = props;
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card bg-light mb-3" style={{ width: "18rem" }}>
                    <img src={c} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{element.desc.slice(0,50)}...</p>
                        <h5 className="card-title text-center">{element.name}</h5>
                        <h5 className="card-title text-center text-danger">₹ {element.price}/-</h5>
                        <div className="text-center">
                            <button className="btn btn-dark" id={element._id} onClick={() => addFood(element._id, element.name, element.category, element.subcategory, element.price)}>Add in Basket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItem