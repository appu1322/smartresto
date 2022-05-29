import React, { useState } from 'react'


function Dish(props) {
    const { dish, handleDish, deleteDish, handleStatus } = props;

    return (
        <>
            <tr>
                <td>{dish.name}</td>
                <td>{dish.desc.slice(0, 10)}...</td>
                <td>{dish.category}</td>
                <td>{dish.subcategory}</td>
                <td>{dish.price}</td>
                <td className='text-center'>{
                    dish.status === "ACTIVE" ?
                    <input class="form-check-input" checked type="checkbox"  id="flexCheckDefault" onClick={() => handleStatus(dish._id, dish.status)} />
                    :
                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => handleStatus(dish._id, dish.status)}/>
                }
                </td>
                <td className='text-center'>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit" onClick={() => handleDish(dish._id)}>Edit</button>
                    <button className="btn btn-danger mx-2" onClick={() => deleteDish(dish._id)}>Delete</button>
                </td>
            </tr>

        </>
    )
}

export default Dish