import Loadable from 'react-loadable';
import Loading from '../components/loading/index';
import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

import { getIEVersion } from '../utils';

const load = (page) => {
    return Loadable({
        loader: () => import(`../pages/${page}/index`),
        loading: Loading,
    });
}

const LoadablePage1 = load('page1');   // test page
const LoadablePage2 = load('page2');    // test page
const LoadableNotsupport = load('notsupport');  // IE9以下浏览器不支持页面
const LoadableLogin = load('login');   // 登录页

const IEversion = getIEVersion();

// IE9 使用 hashRouter
const Router = IEversion && IEversion === 9 ? HashRouter : BrowserRouter;

const Routers = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={LoadableLogin}></Route>
                <Route exact path="/" component={LoadablePage1}></Route>
                <Route exact path="/page2" component={LoadablePage2}></Route>
                <Route exact path="/notsupport" component={LoadableNotsupport}></Route>
            </Switch>
        </div>
    </Router>
)

export default Routers;
