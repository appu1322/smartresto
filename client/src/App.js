import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import Basket from "./components/user/Basket";
import Dashboard from "./components/admin/Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>

            <Route exact path="/" element={<User/>}/>
            <Route exact path="/basket" element={<Basket/>}/>
            <Route exact path="/admin" element={<Dashboard/>}/>
              
          </Routes>
        </Router>
      </div>
    )
  }
}