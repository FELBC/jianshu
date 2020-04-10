// 组件数据从自身state放到仓库store reducer统一管理
// 通过dispatch action修改数据
// reducer存放过多数据会造成代码不可维护
// 把一个reducer拆分成多个子的reducer
// 然后通过combineReducers再做整合
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

//整合各模块对应reducer，组合成大的reducer
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer,
    detail:detailReducer
})

export default reducer;