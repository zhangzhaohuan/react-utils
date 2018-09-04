import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
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
        aaa
      </div>
    )
  }
}
export default App