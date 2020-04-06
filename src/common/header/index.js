import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';

// 无状态组件，只有render函数
// 替换声明class组件提升性能
// class组件方式的this.props修改成props映射到页面
const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused':''}
                            onFocus = {props.handleInputFocus}    
                            onBlur = {props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>
                        &#xe6dd;
                    </i>
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

// 仓库store数据映射到组件props
// 通过props渲染到页面
const mapStateToProps = (state) => {
    return {
        focused:state.focused
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
            const action = {
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action = {
                type:'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);