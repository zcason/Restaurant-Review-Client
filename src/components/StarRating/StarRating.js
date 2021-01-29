import React, { Component } from 'react';
import * as BsIcons from "react-icons/bs";
import './StarRating.css';


class StarRating extends Component {
    state = {}

    rate = rating => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<BsIcons.BsStarFill key={i} className={'star-color'} />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<BsIcons.BsStarHalf key={i} className={'star-color'} />);
            } else {
                stars.push(<BsIcons.BsStar key={i} className={'star-color'} />);
            }

        }
        return stars;
    }

    render() {

        return (
            <>
                {this.rate(this.props.rating)}
            </>
        );
    }
}

export default StarRating;