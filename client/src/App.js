import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import Basket from "./components/user/Basket/Basket";
import Dashboard from "./components/admin/Dashboard";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>

            {/* user pages  */}
            <Route exact path="/" element={<User category="fastfood"/>}/>
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
            <Route exact path="/admin" element={<Dashboard/>}/>
              
          </Routes>
        </Router>
      </div>
    )
  }
}