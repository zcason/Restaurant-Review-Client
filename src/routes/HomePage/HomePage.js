import React, { Component } from 'react';
import AddRestaurant from '../../components/AddRestaurant/AddRestaurant';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import Header from '../../components/Header/Header';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './HomePage.css';


class HomePage extends Component {
    state = {
        isLoading: true,
        restaurants: {}
    }
    componentDidMount() {
        RestaurantReviewApiService.getAllRestaurants()
            .then(results => {
                this.setState({
                    restaurants: results,
                    isLoading: false
                });
            })
    }
    render() {
        const { isLoading, restaurants } = this.state;
        return (
            <div>
                <Header />
                <AddRestaurant />
                <span className={'res-list'}>
                    {isLoading ? <p>Loading</p> : <RestaurantList restaurants={restaurants} />}
                </span>
            </div>
        );
    }
}

export default HomePage;