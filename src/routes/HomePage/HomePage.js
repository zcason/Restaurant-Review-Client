import React, { Component } from 'react';
import AddRestaurant from '../../components/AddRestaurant/AddRestaurant';
import Header from '../../components/Header/Header';


class HomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <AddRestaurant />
            </div>
        );
    }
}

export default HomePage;