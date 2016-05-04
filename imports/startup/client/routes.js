import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../../ui/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


// route components
import App from '../../ui/layouts/app';
import NotFoundPage from '../../ui/pages/not-found-page';
import {Accounts, STATES} from 'meteor/std:accounts-ui';


export const renderRoutes = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN }/>
                <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP }/>
            </Route>
            <Route path="*" component={NotFoundPage}/>
        </Router>
    </Provider>

);