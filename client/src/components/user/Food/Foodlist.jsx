import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../../redux/foodSlice';
import FoodItem from './FoodItem';
import { getDishes } from '../../../services/dish';

const Foodlist = (props) => {
    const [foods, setFoods] = useState()
    const foodItem = useSelector((state) => state.foods);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            getDishes(props.subcategory)
                .then((res) => {
                    console.log(res)
                    setFoods(res)
                    for (let item of foodItem.item) {
                        hideButton(item.id)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData();
    }, [props.subcategory])

    const hideButton = (id) => {
        const button = document.getElementById(id)
        button.innerText = 'Item Added'
        button.className = 'btn'
        button.disabled = true
    }

    const addFood = (id, name, category, subcategory, price, qty = 1) => {
        dispatch(add({ id, name, category, subcategory, price, qty }));
        hideButton(id)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center" id="foodlist-title">{props.subcategory.toUpperCase()}</h1>
                {foods && foods.map((element, i) => {
                    return <FoodItem key={i} element={element} addFood={addFood} />
                })}
            </div>
        </div>
    )
}


export default Foodlist