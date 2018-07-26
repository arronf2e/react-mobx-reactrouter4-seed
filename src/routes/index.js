import React from 'react';
import { history } from './history';
import { renderRoutes } from 'react-router-config';
import {
    Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import routes from './routes';

export default (
    <Router history={history} basename=''>
        <Switch>
            {renderRoutes(routes)}
            <Redirect to='/notfound' />
        </Switch>
    </Router>
);
