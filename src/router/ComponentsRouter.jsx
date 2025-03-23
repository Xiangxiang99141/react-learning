import React from "react"
import ComponentsLayout from "../layout/ComponentsLayout"
import Components from "../pages/Components"
import InputTest1 from "../components/InputTest1"

const ComponentsRouter = [
    {
        name:'組件',
        path:'/components',
        element:<ComponentsLayout />,
        fullpath:'/components',
        children:[
            {
                name:'組件列表',
                path:'',
                element:<Components />,
                fullpath:'/components',
            },
            {
                name:'輸入框測試1',
                path:'test1',
                element:<InputTest1 />,
                fullpath:'/components/test1',
            }
        ]
    }
];

export default ComponentsRouter;