import React, { Component } from 'react'
import NavBar from './NavBar'
import TablesList from './TablesList'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <TablesList />
            </div>
        )
    }
}
