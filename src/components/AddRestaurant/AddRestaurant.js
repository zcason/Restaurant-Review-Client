import React, { Component } from 'react';
import './AddRestaurant.css'

class AddRestaurant extends Component {
    state = {}
    render() {
        return (
            <div className="form">
                <form>
                    <div className={'form-row'}>
                        <div className={'column'}>
                            <input
                                type='text'
                                className={'form-control'}
                                placeholder='name'
                            />
                        </div>
                        <div className={'column'}>
                            <input
                                type='text'
                                className={'form-control'}
                                placeholder='location'
                            />
                        </div>
                        <div className={'column'}>
                            <select className={'select-price'}>
                                <option disabled>Price Range</option>
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