import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';

class App extends Component{
  render(){
    return(
      // Provider里面所有的组件都有能力去使用store里的数据
      // Provider把store里的数据都提供给了它内部的Header组件
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
