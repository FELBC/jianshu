import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component{

    getListArea(){
        const { focused,list } = this.props;
        if(focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                 </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused':''}
                                onFocus = {handleInputFocus}    
                                onBlur = {handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont':'iconfont'}>
                            &#xe6dd;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

// 仓库store数据映射到组件props
// 通过props渲染到页面
const mapStateToProps = (state) => {
    return {
        // 通过使用redux-immutable将state也变成immutable对象
        // immutable类型数据调用对象属性需要通过.get(属性)方式
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list'])
    }
}

/***********************************************************************
 * redux里面数据修改相关流程：
 * action => store => reducer => store => 数据发生更新 => 页面发生改变
 * 相关交互操作想要改变页面数据，需要通过页面方法改变store数据
 * 先调用store dispatch方法
 * store通过reducer修改对应数据并返回给store
 * store再通过mapStateToProps映射到组件props更新数据，最后页面数据发生改变
************************************************************************/
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            // 派发getList action获取热门搜索异步数据
            dispatch(actionCreators.getList());
            // 控制列表显示，input框长短
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);