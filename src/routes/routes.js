import loginRoutes from './login';
import mainRoutes from './main';

// import { getIEVersion } from '../utils';

// const IEversion = getIEVersion();
//
// // IE9 使用 hashRouter
// const Router = IEversion && IEversion === 9 ? HashRouter : BrowserRouter;
//
// const Routers = () => (
//     <Router>
//         <Switch>
//             <Route exact path="/login" component={LoadableLogin}></Route>
//             <Route exact path="/" component={LoadableLayout}>
//             </Route>
//             <Route exact path="/notsupport" component={LoadableNotsupport}></Route>
//         </Switch>
//     </Router>
// )

const routes = [
    ...loginRoutes,
    ...mainRoutes,
]

export default routes;
