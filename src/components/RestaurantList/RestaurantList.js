import React, { Component } from 'react';
import './RestaurantList.css';

class RestaurantList extends Component {
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.restaurants.map(restaurant => {
                        return <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>5</td>
                            <td><button className="update">Update</button></td>
                            <td><button className="delete">Delete</button></td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        );
    }
}

export default RestaurantList;