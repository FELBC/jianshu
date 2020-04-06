// 组件数据从自身state放到仓库store reducer统一管理
// 通过dispatch action修改数据
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