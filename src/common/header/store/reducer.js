import * as constants from './constants';                                                                                                                                          

// header组件拆分创建自己的reducer，
// 独立管理header部分store对应reducer数据修改逻辑
const defaultState = {
    focused:false
};

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