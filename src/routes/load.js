import Loadable from 'react-loadable';
import Loading from '../components/loading/index';

export default (page) => {
    return Loadable({
        loader: () => import(`../pages/${page}/index`),
        loading: Loading,
    });
}
