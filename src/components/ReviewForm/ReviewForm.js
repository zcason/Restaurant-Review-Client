import React, { Component } from 'react';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './ReviewForm.css';


class ReviewForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { id, SetState } = this.props;
        const { name, rating, content } = event.target;
        const review = {
            name: name.value,
            rating: rating.value,
            content: content.value
        }
        RestaurantReviewApiService.postReview(id, review)
            .then(res => {
                SetState(res)
            })
    }
    render() {
        return (
            <>
                <form
                    className={'review-form'}
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        className='form-control'
                        type='text'
                        required
                    />
                    <label htmlFor='rating'>Rating</label>
                    <input
                        id='rating'
                        className='form-control'
                        type='number'
                        min="1"
                        max="5"
                        required
                    />
                    <label htmlFor='content'>Review</label>
                    <textarea
                        id='content'
                        className='review-text-area'
                        type='text'
                        required
                    />
                    <button className='submit-update' type='submit'>Submit</button>
                </form>
            </>
        );
    }
}

export default ReviewForm;