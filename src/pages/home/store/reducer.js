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
    }],
    articleList:[{
        id:1,
        title:'一个人是否值得交往，看这四点就够了',
        desc:'有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3356997-6b687f4a1850c966.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:2,
        title:'一个人是否值得交往，看这四点就够了',
        desc:'有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3356997-6b687f4a1850c966.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:3,
        title:'一个人是否值得交往，看这四点就够了',
        desc:'有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3356997-6b687f4a1850c966.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:4,
        title:'一个人是否值得交往，看这四点就够了',
        desc:'有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3356997-6b687f4a1850c966.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
});

export default (state=defaultState,action) => {
    switch(action.type){
        default:
            return state;
    }
}