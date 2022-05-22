import React, { useEffect, useState } from 'react'
import table from './images/table.jpg'
import { io } from "socket.io-client";
import OrderList from './OrderList';
const ENDPOINT = "http://localhost:5501";
const socket = io(ENDPOINT);


function TablesList() {
    const [table1_order, setTable1_order] = useState()
    const [table2_order, setTable2_order] = useState()
    const [table3_order, setTable3_order] = useState()
    const [table4_order, setTable4_order] = useState()

    const [table1_border, setTable1_border] = useState("card")
    const [table2_border, setTable2_border] = useState("card")
    const [table3_border, setTable3_border] = useState("card")
    const [table4_border, setTable4_border] = useState("card")

    const [table1_button, setTable1_button] = useState("btn btn-dark")
    const [table2_button, setTable2_button] = useState("btn btn-dark")
    const [table3_button, setTable3_button] = useState("btn btn-dark")
    const [table4_button, setTable4_button] = useState("btn btn-dark")

    useEffect(() => {
        socket.on('receive-order', (payload) => {
            if (payload.table === 1) {
                setTable1_order(payload)
                setTable1_border("card border-success")
                setTable1_button("btn btn-success")
            } else if (payload.table === 2) {
                setTable2_order(payload)
                setTable2_border("card border-success")
                setTable2_button("btn btn-success")
            } else if (payload.table === 3) {
                setTable3_order(payload)
                console.log(payload)
                setTable3_border("card border-success")
                setTable3_button("btn btn-success")
            } else {
                setTable4_order(payload)
                setTable4_border("card border-success")
                setTable4_button("btn btn-success")
            }
        })
    }, [])

    const viewOrder = (table) => e => {
        if (table === 1) {
            setTable1_border("card border-warning")
            setTable1_button("btn btn-warning")
        } else if (table === 2) {
            setTable2_border("card border-warning")
            setTable2_button("btn btn-warning")
        } else if (table === 3) {
            setTable3_border("card border-warning")
            setTable3_button("btn btn-warning")
        } else {
            setTable4_border("card border-warning")
            setTable4_button("btn btn-warning")
        }
    }

    const orderComplete = (table) => e => {
        if (table === 1) {
            setTable1_border("card")
            setTable1_button("btn btn-dark")
            setTable1_order()
        } else if (table === 2) {
            setTable2_border("card")
            setTable2_button("btn btn-dark")
            setTable2_order()

        } else if (table === 3) {
            setTable3_border("card")
            setTable3_button("btn btn-dark")
            setTable3_order()
        } else {
            setTable4_border("card")
            setTable4_button("btn btn-dark")
            setTable4_order()
        }
    }

    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-4 my-3">
                    <div className={table1_border}>
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {table1_order ?
                                <button className={table1_button} onClick={viewOrder(1)} data-bs-toggle="modal" data-bs-target="#table1">View Order</button>
                                :
                                <button disabled className={table1_button} data-bs-toggle="modal" data-bs-target="#table1">View Order</button>
                            }
                            {table1_button === "btn btn-warning" ?
                                <button className="btn btn-danger mx-4" onClick={orderComplete(1)} >Order Complete</button>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className={table2_border}>
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {table2_order ?
                                <button className={table2_button} onClick={viewOrder(2)} data-bs-toggle="modal" data-bs-target="#table2">View Order</button>
                                :
                                <button disabled className={table2_button} data-bs-toggle="modal" data-bs-target="#table2">View Order</button>
                            }
                            {table2_button === "btn btn-warning" ?
                                <button className="btn btn-danger mx-4" onClick={orderComplete(2)} >Order Complete</button>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className={table3_border}>
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {table3_order ?
                                <button className={table3_button} onClick={viewOrder(3)} data-bs-toggle="modal" data-bs-target="#table3">View Order</button>
                                :
                                <button disabled className={table3_button} data-bs-toggle="modal" data-bs-target="#table3">View Order</button>
                            }
                            {table3_button === "btn btn-warning" ?
                                <button className="btn btn-danger mx-4" onClick={orderComplete(3)} >Order Complete</button>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className={table4_border}>
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 4</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {table4_order ?
                                <button className={table4_button} onClick={viewOrder(4)} data-bs-toggle="modal" data-bs-target="#table4">View Order</button>
                                :
                                <button disabled className={table4_button} data-bs-toggle="modal" data-bs-target="#table4">View Order</button>
                            }
                            {table4_button === "btn btn-warning" ?
                                <button className="btn btn-danger mx-4" onClick={orderComplete(4)} >Order Complete</button>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="table1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Order List</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table id="customers">
                                <tr>
                                    <th>Dish name</th>
                                    <th>Variety</th>
                                    <th>Qty</th>
                                    <th>price</th>
                                </tr>
                                {table1_order && table1_order.items.map((dish) => {
                                    return <OrderList dish={dish} />
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="table2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Order List</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table id="customers">
                                <tr>
                                    <th>Dish name</th>
                                    <th>Variety</th>
                                    <th>Qty</th>
                                    <th>price</th>
                                </tr>
                                {table2_order && table2_order.items.map((dish) => {
                                    return <OrderList dish={dish} />
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="table3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Order List</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table id="customers">
                                <tr>
                                    <th>Dish name</th>
                                    <th>Variety</th>
                                    <th>Qty</th>
                                    <th>price</th>
                                </tr>
                                {table3_order && table3_order.items.map((dish) => {
                                    return <OrderList dish={dish} />
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="table4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Order List</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table id="customers">
                                <tr>
                                    <th>Dish name</th>
                                    <th>Variety</th>
                                    <th>Qty</th>
                                    <th>price</th>
                                </tr>
                                {table4_order && table4_order.items.map((dish) => {
                                    return <OrderList dish={dish} />
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TablesList