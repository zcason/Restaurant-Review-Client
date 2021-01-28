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

    handleDelete = (id) => {
        RestaurantReviewApiService.deleteRestaurantById(id)
        this.props.delete(id)
    }

    handleSelectRestaurant = (id) => {
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
                            onClick={() => this.handleSelectRestaurant(restaurant.id)}
                        >
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>5</td>
                            <td>
                                <Link to={`/restaurants/${restaurant.id}/update`}>
                                    <button
                                        className="update"
                                    >
                                        Update
                                </button>
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="delete"
                                    onClick={() => this.handleDelete(restaurant.id)}
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