import React from 'react'
import { useState } from 'react'
import { addDish } from '../../services/dish';

function AddDish(props) {
    const { fetchData } = props;
    const [dish, setDish] = useState({
        name: "",
        desc: "",
        category: "",
        subcategory: "",
        price: "",
        status: "ACTIVE"
    });

    const handleDishInput = () => event => {
        const key = event.target.name;
        const value = event.target.value;
        setDish({ ...dish, [key]: value });
    }

    const addNewDish = () => {
        addDish(dish)
        .then(() => {
            fetchData();
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container my-3'>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDish">
                Add Dish
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="addDish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add new dish</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" name='name' value={dish.name} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="desc" class="form-label">Description</label>
                                <input type="text" class="form-control" id="desc" name='desc' value={dish.desc} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <input type="text" class="form-control" id="category" name='category' value={dish.category} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="subcategory" class="form-label">Sub Vategory</label>
                                <input type="text" class="form-control" id="subcategory" name='subcategory' value={dish.subcategory} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input type="text" class="form-control" id="price" name='price' value={dish.price} onChange={handleDishInput()} />
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addNewDish}>Add Dish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDish