import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import IntlTelInput from './component/IntlTelInput/index'
import Geetest from './component/Geetest/index2.js'
class App extends Component {
  componentWillMount() {
    NProgress.start();    // 页面开始加载时调用 start 方法
  }
  componentDidMount() {
    NProgress.done();  // 页面请求完毕时调用 done 方法
  }
  render() {
    return (
      <div>
        <IntlTelInput />
        {/* <Geetest /> */}
      </div>
    )
  }
}
export default App