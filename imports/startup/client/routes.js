import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../ui/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


// route components
import App from '../../ui/layouts/app';
import NotFoundPage from '../../ui/pages/not-found-page';
export const renderRoutes = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        </Router>
    </Provider>

);

