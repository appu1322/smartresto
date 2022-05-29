import { Key } from '@mui/icons-material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Dish from './Dish';
import { getDish, updateDish, updateDishStatus, deleteDish } from '../../services/dish';



function ListDish(props) {
    const { dish, fetchData } = props
    const [editDish, setEditDish] = useState({
        _id: "",
        name: "",
        desc: "",
        category: "",
        subcategory: "",
        price: "",
    });

    useEffect(() => {
        fetchData();
    }, [dish])


    const handleDishInput = () => event => {
        const key = event.target.name;
        const value = event.target.value;
        setEditDish({ ...editDish, [key]: value });
    }

    const handleDish = (id) => {
        getDish(id)
            .then((res) => {
                setEditDish(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const UpdateDish = () => {
        updateDish(editDish._id, editDish)
            .then(() => {
                fetchData();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const DeleteDish = (id) => {
        deleteDish(id)
            .then(() => {
                fetchData();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleStatus = (id, status) => {
        status = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
        updateDishStatus(id, {status})
        .then(() => {
            fetchData();
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className='container'>
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                {dish.map((val, index) => {
                    return <Dish Key={index} handleDish={handleDish} dish={val} deleteDish={DeleteDish} handleStatus={handleStatus} />
                })}
            </table>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit dish</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" name='name' value={editDish?.name} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="desc" class="form-label">Description</label>
                                <input type="text" class="form-control" id="desc" name='desc' value={editDish?.desc} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <input type="text" class="form-control" id="category" name='category' value={editDish?.category} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="subcategory" class="form-label">Sub Vategory</label>
                                <input type="text" class="form-control" id="subcategory" name='subcategory' value={editDish?.subcategory} onChange={handleDishInput()} />
                            </div>
                            <div class="mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input type="text" class="form-control" id="price" name='price' value={editDish?.price} onChange={handleDishInput()} />
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={UpdateDish}>Update Dish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListDish