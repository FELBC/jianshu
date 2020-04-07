import * as constants from './constants';                                                                                                                                          

// header组件拆分创建自己的reducer，
// 独立管理header部分store对应reducer数据修改逻辑

// 定义header组件初始化store数据内容
const defaultState = {
    focused:false
};

// reducer负责拿到原始的state的值，一定不能对state做修改，要返回新的state回去，
// 和action一起做处理，
// 返回新的state的状态，
export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return {
            focused:true
        }
    }
    if(action.type === constants.SEARCH_BLUR){
        return {
            focused:false
        }
    }
    return state;
}