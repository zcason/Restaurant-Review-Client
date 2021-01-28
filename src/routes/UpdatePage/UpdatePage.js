import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import UpdateForm from '../../components/UpdateForm/UpdateForm';


class UpdatePage extends Component {
    text = useParams;

    state = {}
    render() {
        return (
            <div>
                <Header />
                <UpdateForm />
            </div>
        );
    }
}

export default UpdatePage;