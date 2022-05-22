import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTable } from '../../redux/foodSlice';
import { Link } from "react-router-dom";


function Login() {
    const [table, setTable] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        localStorage.setItem("table", table)
        dispatch(changeTable(table))
    }
    return (
        <div className='login'>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Table No." value={table} onChange={e => setTable(e.target.value)} />
                <div className="text-center">
                <Link className="btn btn-primary my-2" to="/home" onClick={handleLogin}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Login