import React from 'react'

function PriceList(props) {
    const {element} = props
    return (
        <div>
            <div className="priceDetail-base-row my-2">
                <span>{element.name}</span>
                <span className="priceDetail-base-value">{element.price} X {element.qty} = {element.price * element.qty} </span>
            </div>
        </div>
    )
}

export default PriceList