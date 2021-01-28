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
            .then(res => {
                this.setState({
                    restaurants: res,
                    isLoading: false
                });
            })
    }

    addRestaurantSetState = (apiResponse) => {
        this.setState({ restaurants: [...this.state.restaurants, apiResponse] });
    }

    deleteRestaurant = (id) => {
        this.setState({
            restaurants: this.state.restaurants.filter(restaurant => {
                return restaurant.id !== id
            })
        });
    }

    render() {
        const { isLoading, restaurants } = this.state;
        return (
            <div>
                <Header />
                <AddRestaurant SetState={this.addRestaurantSetState} />
                <span className={'res-list'}>
                    {isLoading ? <p className={'loading'}>Loading</p> : <RestaurantList restaurants={restaurants} delete={this.deleteRestaurant} />}
                </span>
            </div>
        );
    }
}

export default HomePage;