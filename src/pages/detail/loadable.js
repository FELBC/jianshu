import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),// 组件异步加载
    loading(){
        return <div>正在加载</div>// 这部分可以拆分出去一个独立的正在加载组件
    }
});

export default () => <LoadableComponent />