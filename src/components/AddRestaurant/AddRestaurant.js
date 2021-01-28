import React, { Component } from 'react';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './AddRestaurant.css';

class AddRestaurant extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const { restaurant_name, restaurant_location, price } = event.target;
        const name = restaurant_name.value;
        const location = restaurant_location.value;
        const price_range = price.value;
        RestaurantReviewApiService.postRestaurant({ name, location, price_range })
            .then(res => {
                this.props.SetState(res)
            })
        restaurant_name.value = "";
        restaurant_location.value = "";
        price.value = "";
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-row'}>
                        <div className={'column'}>
                            <input
                                id='restaurant_name'
                                aria-label='restaurant_name'
                                type='text'
                                className={'form-control'}
                                placeholder='name'
                                required
                            />
                        </div>
                        <div className={'column'}>
                            <input
                                id='restaurant_location'
                                aria-label='restaurant_location'
                                type='text'
                                className={'form-control'}
                                placeholder='location'
                                required
                            />
                        </div>
                        <div className={'column'}>
                            <select
                                id='price'
                                aria-label='price'
                                className={'select-price'}
                                required
                            >
                                <option value="" disabled>Price Range</option>
                                <option value='1'>$</option>
                                <option value='2'>$$</option>
                                <option value='3'>$$$</option>
                                <option value='4'>$$$$</option>
                                <option value='5'>$$$$$</option>
                            </select>
                        </div>
                        <button className={'submit-restaurant'} type='submit'>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddRestaurant;