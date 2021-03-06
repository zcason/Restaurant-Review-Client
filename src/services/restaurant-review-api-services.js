import config from '../config';

const RestaurantReviewApiService = {
    getAllRestaurants() {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/`)
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getRestaurantById(id) {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/${id}`)
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postRestaurant(restaurant) {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )

    },
    postReview(id, review) {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )

    },
    updateRestaurantById(id, restaurant) {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        })
            .then(res => (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )

    },
    deleteRestaurantById(id) {
        return fetch(`${config.API_ENDPOINT}/api/restaurants/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
    }
}

export default RestaurantReviewApiService;