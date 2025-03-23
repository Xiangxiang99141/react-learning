import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';

const Main = [
    {
        name:'首頁',
        path:'/',
        element:<Home />,
        fullpath:'/'
    },
    {
        name:'關於我',
        path:'/about',
        element:<About />,
        fullpath:'/about'
    },
];

export default Main;