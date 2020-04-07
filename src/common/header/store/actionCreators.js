import * as constants from './constants';
import axios from 'axios';

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});

// 获取热门搜索异步数据
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            
        }).catch(() => {
            console.log('error');
        });
    }
}