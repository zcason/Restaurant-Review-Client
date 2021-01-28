import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './RestaurantList.css';

class RestaurantList extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleDelete = (event, id) => {
        event.stopPropagation();
        RestaurantReviewApiService.deleteRestaurantById(id)
        this.props.delete(id)
    }

    handleUpdate = (event, id) => {
        event.stopPropagation();
        const { history } = this.props;
        history.push(`/restaurants/${id}/update`)
    }

    handleSelectRestaurant = (event, id) => {
        event.stopPropagation();
        const { history } = this.props;
        history.push(`/restaurants/${id}`)
    }

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
                        return <tr
                            className={"restaurant-tab"}
                            key={restaurant.id}
                            onClick={(event) => this.handleSelectRestaurant(event, restaurant.id)}
                        >
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>5</td>
                            <td>
                                <button
                                    className="update"
                                    onClick={(event) => this.handleUpdate(event, restaurant.id)}

                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="delete"
                                    onClick={(event) => this.handleDelete(event, restaurant.id)}
                                >
                                    Delete
                                    </button>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        );
    }
}

export default withRouter(RestaurantList);