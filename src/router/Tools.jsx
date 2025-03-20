import ToolsIndex from '../pages/tools/index';
import Settlement from '../pages/tools/Settlement';
import ToolsLayout from '../layout/ToolsLayout';

const Tools = [
    {
        name: '工具',
        path: '/tools',
        element: <ToolsLayout />,
        children: [
            { name: '工具列表', path: '', element: <ToolsIndex />, fullpath: '/tools', },
            { name: '結算表',path: 'settlement', element: <Settlement />,fullpath: '/tools/settlement', },
        ]
    },
];


export default Tools;