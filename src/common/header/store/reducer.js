// header组件拆分创建自己的reducer，
// 独立管理header部分store对应reducer数据修改逻辑
const defaultState = {
    focused:false
};

export default (state = defaultState, action) => {
    if(action.type === 'search_focus'){
        return {
            focused:true
        }
    }
    if(action.type === 'search_blur'){
        return {
            focused:false
        }
    }
    return state;
}