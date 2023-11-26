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

/**video.js */
import Video from './component/Video';

/**js  */
import Js from './component/Js';

/**boss  */
import Boss from './component/Boss';

import EventEmitterDemo from './component/EventEmitterDemo';

/** lottie-web*/
import LottieWeb from './component/LottieWeb';

//AntdMenu
import AntdMenu from './component/AntdMenu';

//Svg
import Svg from './component/Svg';

//SvgDemo
import SvgDemo from './component/SvgDemo';

//ClassDemo
import ClassDemo from './component/ClassDemo/index.js';

//wangeditor 
import Wangeditor from './component/Wangeditor/index';

//antd
import Antd from './component/Antd';

//immutable-JS
import Immutable from './component/Immutable';

//interval

import Interval from './component/Interval';

//样式
import './App.css'
import { EventEmitter } from 'events';

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
              {/* <Route path='/swiper' component={Swiper} /> */}
              <Route path='/moment' component={Moment} />
              <Route path='/braft-editor' component={BraftEditor} />
              <Route path='/video' component={Video} />
              <Route path='/swiper' component={Swiper} />
              <Route path='/js' component={Js} />
              <Route path='/boss' component={Boss} />
              <Route path='/eventEmitter' component={EventEmitterDemo} />
              <Route path='/lottie-web' component={LottieWeb} />
              {/* <Route path='/antd-menu' component={AntdMenu} /> */}
              <Route path='/svg' component={Svg} />
              <Route path='/svg-demo' component={SvgDemo} />
              <Route path='/classDemo' component={ClassDemo} />
              <Route path='/wangeditor' component={Wangeditor} />
              <Route path='/antd' component={Antd} />
              <Route path='/immutable-js' component={Immutable} />
              <Route path='/interval' component={Interval} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
export default App