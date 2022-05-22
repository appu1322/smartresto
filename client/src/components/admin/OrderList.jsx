import React from 'react'

function OrderList(props) {
    const { dish } = props
    return (
        <tr>
            <td>{dish.name}</td>
            <td>{dish.category}</td>
            <td>{dish.qty}</td>
            <td>{dish.price}</td>
        </tr>
    )
}

export default OrderList