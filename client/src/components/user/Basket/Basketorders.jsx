import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { update, remove } from '../../../redux/foodSlice';
import BasketItem from './BasketItem';
import PriceList from './PriceList';

import Empty from '../images/empty.png';

const Basketorders = () => {
    const [currentId, setCurrentId] = useState('')
    const [totalAmount, setTotalAmount] = useState('')
    const foodItem = useSelector((state) => state.foods);
    const dispatch = useDispatch();

    useEffect(() => {
        const empty = document.getElementById('empty')
        if (foodItem.item.length > 0) {
            empty.style.display = 'none'
        } else {
            empty.style.display = 'inherit'
        }

        let price = 0;
        for (let item of foodItem.item) {
            price = price + (item.price * item.qty)
        }
        setTotalAmount(price)
    })

    const removeFood = (id) => {
        dispatch(remove(id));
    }

    const handleCurrentId = (id) => {
        setCurrentId(id)
    }

    const handleQuantity = (currentId, qty) => {
        dispatch(update({ id: currentId, qty }))
    }


    return (
        <div className="order-session container">
            <div id='empty' style={{height: "calc(100vh - 70px)"}}>
                <img src={Empty} alt="" width="100%" height="100%" />
            </div>
            {foodItem.item.length > 0 ?
                <div className="row">

                    <div className="col-md-8 first-half py-5">
                        <h1>Your Orders</h1>

                        {foodItem && foodItem.item.map((element) => {
                            return <BasketItem key={element.id} element={element} removeFood={removeFood} handleCurrentId={handleCurrentId} />
                        })}
                    </div>

                    <div className="col-md-4 second-half py-5">
                        <div className="priceBlock-base-priceHeader">PRICE DETAILS ( {foodItem.item.length} Items)</div>
                        <div className="priceBreakUp-base-orderSummary">
                            {foodItem && foodItem.item.map((element) => {
                                return <PriceList key={element.id} element={element} />
                            })}
                        </div>

                        <div className="totalPrice-dispplay">
                            <div className="priceDetail-base-row my-2">
                                <span>Total Price</span>
                                <span className="priceDetail-base-value">₹{totalAmount}/-</span>
                            </div>
                        </div>
                        <button className="btn btn-success mt-5 w-100" data-bs-toggle="modal" data-bs-target="#order">Place Order</button>
                    </div>
                </div>
            : ""}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="quantity" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select Quantity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="dialogs-base-list d-flex justify-content-between">
                                <div id="1" className="dialogs-base-item" data-bs-dismiss="modal" onClick={() => handleQuantity(currentId, 1)}>
                                    <div className="dialogs-base-display">1</div>
                                </div>
                                <div id="2" className="dialogs-base-item" data-bs-dismiss="modal" onClick={() => handleQuantity(currentId, 2)}>
                                    <div className="dialogs-base-display">2</div>
                                </div>
                                <div id="3" className="dialogs-base-item" data-bs-dismiss="modal" onClick={() => handleQuantity(currentId, 3)}>
                                    <div className="dialogs-base-display">3</div>
                                </div>
                                <div id="4" className="dialogs-base-item" data-bs-dismiss="modal" onClick={() => handleQuantity(currentId, 4)}>
                                    <div className="dialogs-base-display">4</div>
                                </div>
                                <div id="5" className="dialogs-base-item" data-bs-dismiss="modal" onClick={() => handleQuantity(currentId, 5)}>
                                    <div className="dialogs-base-display">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="order" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select Payment Method</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="dialogs-base-list d-flex justify-content-between">
                                Cash
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basketorders 