import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const Home = () => (
  <div>home</div>
)

/** 进度条 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/** 国旗插件 */
import IntlTelInput from './component/IntlTelInput/index.js'

/** 极验 */
import Geetest from './component/Geetest/index2.js'

/**tradding view */
import TraddingView from './component/TraddingView/index.js';

/* react-loadable*/ 
import ReactLoadable from './component/ReactLoadable'

//样式
import './App.css'

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
        <Router>
          <Switch>
            <Route path='/react-loadable' component={ReactLoadable} />
            <Route path='/intl-tel-input' component={IntlTelInput} />
            <Route path='/geetest' component={Geetest} />
            <Route path='/tradding-view' component={TraddingView} />
            <Route path='/' component={Home} />

          </Switch>
        </Router>
      </div>
    )
  }
}
export default App