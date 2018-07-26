import load from './load';

const LoadableLayout = load('layout');

const LoadablePage1 = load('page1');
const LoadablePage2 = load('page2');


export default [
    {
        path: '/main',
        component: LoadableLayout,
        routes: [
            {
                path: '/main/page1',
                component: LoadablePage1
            },
            {
                path: '/main/page2',
                component: LoadablePage2
            },
        ]
    }
]
