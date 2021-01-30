import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantReviewApiService from '../../services/restaurant-review-api-services';
import './UpdateForm.css';

class UpdateForm extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    state = {
        id: null,
        name: null,
        location: null,
        price_range: null,
        hasResults: false

    }

    getParamValue() {
        let id = this.props.match.params.id;
        return id;
    }

    componentDidMount() {
        let id = this.getParamValue();
        RestaurantReviewApiService.getRestaurantById(id)
            .then(res => {
                this.setState({
                    id: res[0].id,
                    name: res[0].name,
                    location: res[0].location,
                    price_range: res[0].price_range,
                    hasResults: true
                });
            })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { id, name, location, price_range } = this.state;
        RestaurantReviewApiService.updateRestaurantById(id, { name, location, price_range })
            .then(res => {
                const { history } = this.props;
                history.push('/restaurants')
            })
    }

    render() {
        const { name, location, price_range, hasResults } = this.state;
        return (
            <>
                <h2 className={'update-header'}>Update Restaurant</h2>
                {hasResults && <form
                    className={'update-form'}
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='name'>Name</label>
                    <input
                        value={name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        id='name'
                        className='form-control'
                        type='text'
                        required
                    />
                    <label htmlFor='location'>Location</label>
                    <input
                        value={location}
                        onChange={(e) => this.setState({ location: e.target.value })}
                        id='location'
                        className='form-control'
                        type='text'
                        required
                    />
                    <label htmlFor='price'>Price Range</label>
                    <input
                        value={price_range}
                        onChange={(e) => this.setState({ price_range: e.target.value })}
                        id='price'
                        className='form-control'
                        type='number'
                        min="1"
                        max="5"
                        required
                    />
                    <button className='submit-update' type='submit'>Submit</button>
                </form>}
            </>
        );
    }
}

export default withRouter(UpdateForm);