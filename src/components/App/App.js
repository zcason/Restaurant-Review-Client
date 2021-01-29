import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../../routes/HomePage/HomePage';
import DetailPage from '../../routes/DetailPage/DetailPage';
import UpdatePage from '../../routes/UpdatePage/UpdatePage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <main>
        <div>
          <Router>
            <Switch>
              <Route
                exact
                path={'/'}
                component={HomePage}
              />
              <Route
                exact
                path={'/restaurants/:id'}
                component={DetailPage}
              />
              <Route
                path={'/restaurants/:id/update'}
                component={UpdatePage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </Router>
        </div>
      </main>
    );
  }
}

export default App;