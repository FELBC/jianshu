import * as constants from './constants';    
// Immutable data cannot be changed once created 
import { fromJS } from 'immutable';                                                                                                                                

// header组件拆分创建自己的reducer，
// 独立管理header部分store对应reducer数据修改逻辑

// 定义header组件初始化store数据内容
const defaultState = fromJS({
    focused:false,
    list:[]
});

// reducer负责拿到原始的state的值，一定不能对state做修改，要返回新的state回去，
// 和action一起做处理，
// 返回新的state的状态，
// immutable库可以帮助我们避免不小心改变state里面数据的问题
export default (state = defaultState, action) => {
    // immutable类型数据修改需要调用.set(属性，值)方式
    // immutable对象的set方法，会结合之前immutable对象的值，
    // 和设置的值，返回一个全新的对象，
    // 从而避免了修改原始的immutable数据
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state;
    }
}