import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'https://upload.jianshu.io/collections/images/551468/crop1511949510763.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://upload.jianshu.io/collections/images/1861725/crop1583541743141.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }]
});

export default (state=defaultState,action) => {
    switch(action.type){
        default:
            return state;
    }
}