import load from './load';

const LoadableLogin = load('login');   // 登录页

export default [
    {
        path: '/login',
        component: LoadableLogin,
    }
]
