import React, { Component } from 'react';
import StarRating from '../../components/StarRating/StarRating';
import './Reviews.css';


class Reviews extends Component {
    state = {}
    render() {
        const reviewList = this.props.reviews.map(review => {
            return <div key={review.id} className={'review-card'}>
                <p>{review.name}</p>
                <div className={'rating'}>
                    <StarRating rating={review.rating} />
                </div>
                <div className="review-body">{review.content}</div>
            </div>
        });

        return (
            <div className={'card-container'}>
                {reviewList}
            </div>
        );
    }
}

export default Reviews;