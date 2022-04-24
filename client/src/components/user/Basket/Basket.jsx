import React, { Component } from 'react';
import BasketNav from './BasketNav';
import Basketorders from './Basketorders';

export default class Basket extends Component {
    render() {
        return (
            <div>
                <BasketNav/>
                <Basketorders/>
            </div>
        )
    }
}
