import React from 'react'
import table from './images/table.jpg'


function TablesList() {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-4 my-3">
                    <div className="card border-success">
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#table1">View Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="card border-warning ">
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#table2">View Order</button>
                            <button className="btn btn-danger mx-4" >Order Complete</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="card">
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#table3">View Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div className="card">
                        <img src={table} className="card-img-top" alt="..." style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Table 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#table4">View Order</button>
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
                                </tr>
                                <tr>
                                    <td>Maggie</td>
                                    <td>veg</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Pullao</td>
                                    <td>non-veg</td>
                                    <td>5</td>
                                </tr>
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
                                </tr>
                                <tr>
                                    <td>Maggie</td>
                                    <td>veg</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Pullao</td>
                                    <td>non-veg</td>
                                    <td>5</td>
                                </tr>
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
                                </tr>
                                <tr>
                                    <td>Maggie</td>
                                    <td>veg</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Pullao</td>
                                    <td>non-veg</td>
                                    <td>5</td>
                                </tr>
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
                                </tr>
                                <tr>
                                    <td>Maggie</td>
                                    <td>veg</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Pullao</td>
                                    <td>non-veg</td>
                                    <td>5</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TablesList