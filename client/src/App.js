import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import Basket from "./components/user/Basket/Basket";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/SuperAdmin/layout/Layout";
import Login from './components/login/Login';

function App() {
  return (
    <div>
        <Router>
          <Routes>

            {/* user pages  */}
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<User category="fastfood"/>}/>
            <Route exact path="/breakfast" element={<User category="breakfast"/>}/>
            <Route exact path="/lunch" element={<User category="lunch"/>}/>
            <Route exact path="/dinner" element={<User category="dinner"/>}/>
            <Route exact path="/fastfood" element={<User category="fastfood"/>}/>
            <Route exact path="/chines" element={<User category="chines"/>}/>
            <Route exact path="/pizza" element={<User category="pizza"/>}/>
            <Route exact path="/drinks" element={<User category="drinks"/>}/>

            {/* basket page  */}
            <Route exact path="/basket" element={<Basket/>}/>

            {/* admin page  */}
            <Route exact path="/dashboard" element={<Dashboard />}/>
            <Route exact path="/admin" element={<Admin />}/>
              
          </Routes>
        </Router>
      </div>
  )
}

export default App