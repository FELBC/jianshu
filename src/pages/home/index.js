import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className='banner-img' 
                        alt='' 
                        src='https://upload-images.jianshu.io/upload_images/15684874-7428c129a17d0ae6.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp' 
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    // 剔除UI组件逻辑
    componentDidMount(){
        this.props.changeHomeData();
    }
}

// 让容器组件来做逻辑处理
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});

export default connect(null,mapDispatch)(Home);