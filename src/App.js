import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
//chalk 颜色插件
import chalk from 'chalk';
chalk.enabled = true;
// const Home = () => (
//   <div>home</div>
// )
/*Home*/
import Home from './component/Home'

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

/* 美洽客服系统*/
import CustomerService from './component/CustomerService'

//样式
import './App.css'

class App extends Component {
  componentWillMount() {
    NProgress.start();    // 页面开始加载时调用 start 方法
  }
  componentDidMount() {

    console.log(chalk.red('Hello world!'));
    NProgress.done();  // 页面请求完毕时调用 done 方法
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/react-loadable'>react-loadable</Link>
              </li>
              <li>
                <Link to='/intl-tel-input'>intl-tel-input</Link>
              </li>
              <li>
                <Link to='/geetest'>geetest</Link>
              </li>
              <li>
                <Link to='/tradding-view'>tradding view</Link>
              </li>
              <li>
                <Link to='/custom-service'>custom service</Link>
              </li>
              <li>
                <Link to='/'>home</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/react-loadable' component={ReactLoadable} />
              <Route path='/intl-tel-input' component={IntlTelInput} />
              <Route path='/geetest' component={Geetest} />
              <Route path='/tradding-view' component={TraddingView} />
              <Route path='/custom-service' component={CustomerService} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
export default App