import React, {useState} from 'react'
import Navbar from '../../dashboard/NavBar'
import AddDish from '../AddDish'
import ListDish from '../ListDish'
import { getAllDishes } from '../../../services/dish';


function Layout() {
  const [dish, setDish] = useState([]);

  const fetchData = () => {
    getAllDishes()
        .then((res) => {
            setDish(res)
        })
        .catch((error) => {
            console.log(error);
        })
}
  return (
    <div>
        <Navbar/>
        <AddDish/>
        <ListDish dish={dish} fetchData={fetchData} />
    </div>
  )
}

export default Layout