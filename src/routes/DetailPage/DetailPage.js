import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Reviews from '../../components/Reviews/Reviews';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './DetailPage.css';

class DetailPage extends Component {
    state = {
        id: this.props.match.params.id,
        restaurant: {},
        reviews: [],
        hasResults: false
    }

    componentDidMount() {
        const { id } = this.state;
        RestaurantReviewApiService.getRestaurantById(id)
            .then(res => {
                this.setState({
                    restaurant: res[0],
                    reviews: res[1],
                    hasResults: true
                });
            })
    }

    addReviewSetState = (apiResponse) => {
        this.setState({ reviews: [...this.state.reviews, apiResponse] });
    }
    render() {
        console.log(this.state.reviews)
        const { restaurant } = this.state;
        return (
            <div>
                <Header />
                {this.state.hasResults &&
                    <h2 className={'restaurant-header'}>
                        {restaurant.name}
                    </h2>
                }

                <div className={'align-form'}>
                    <ReviewForm
                        SetState={this.addReviewSetState}
                        id={this.state.id}
                    />
                </div>
                {this.state.reviews && <Reviews reviews={this.state.reviews} />}
            </div>
        );
    }
}

export default withRouter(DetailPage);