import React from 'react'


function TablesList() {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-4 my-3">
                    <div class="card border-success">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." style={{height: "25vh"}} />
                        <div class="card-body">
                            <h5 class="card-title">Table 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-success">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div class="card border-danger ">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." style={{height: "25vh"}} />
                        <div class="card-body">
                            <h5 class="card-title">Table 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div class="card border-primary">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." style={{height: "25vh"}} />
                        <div class="card-body">
                            <h5 class="card-title">Table 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-3">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." style={{height: "25vh"}} />
                        <div class="card-body">
                            <h5 class="card-title">Table 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Read More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TablesList