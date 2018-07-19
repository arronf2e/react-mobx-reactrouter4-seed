import Bundle from './bundle';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Page1 = (props) => (
    <Bundle load={() => import('../pages/page1')}>
        {(Page1) => <Page1 {...props}/>}
    </Bundle>
);

const Page2 = (props) => (
    <Bundle load={() => import('../pages/page2')}>
        {(Page2) => <Page2 {...props}/>}
    </Bundle>
);

const Routers = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Page1}></Route>
                <Route exact path="/page2" component={Page2}></Route>
            </Switch>
        </div>
    </Router>
)

export default Routers;


// IE9 使用 hashRouter
// 提供IE9以下浏览器不支持页面
