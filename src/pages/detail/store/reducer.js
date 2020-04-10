import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title:'一个人是否值得交往，看这四点就够了',
    content:`
    <img alt="" src="https://upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" />
    <p>
        <b>有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。”
        朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结交的人。一个人是否值得交往，看这四点就够了。</b>
    </p>
    <p>
        有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。”
        朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结交的人。一个人是否值得交往，看这四点就够了。
    </p>
    <p>
        有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。”
        朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结交的人。一个人是否值得交往，看这四点就够了。
    </p>
    <p>
        有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。”
        朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结交的人。一个人是否值得交往，看这四点就够了。
    </p>`
});

export default (state=defaultState,action) => {
    switch(action.type){
        default:
            return state;
    }
}