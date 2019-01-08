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
import ReactLoadable from './component/ReactLoadable';

/* 美洽客服系统*/
import CustomerService from './component/CustomerService'

/** decimal.js */
import Decimal from './component/Decimal'

/** math */
import MathDemo from './component/MathDemo'

/**bignumber.js */
import BigNumber from './component/BigNumber'

/**swiper */
import Swiper from './component/Swiper'

/**moment.js */
import Moment from './component/Moment'

/**braft-editor */
import BraftEditor from './component/BraftEditor';

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
            <Switch>
              <Route path='/react-loadable' component={ReactLoadable} />
              <Route path='/intl-tel-input' component={IntlTelInput} />
              <Route path='/geetest' component={Geetest} />
              <Route path='/tradding-view' component={TraddingView} />
              <Route path='/custom-service' component={CustomerService} />
              <Route path='/decimal' component={Decimal} />
              <Route path='/math' component={MathDemo} />
              <Route path='/big-number' component={BigNumber} />
              <Route path='/swiper' component={Swiper} />
              <Route path='/moment' component={Moment} />
              <Route path='/braft-editor' component={BraftEditor} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
export default App