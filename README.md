## 第三库在react-create-app中的使用
### nprogress.js 进度条插件
```
npm install --save nprogress

//在webpack.config.dev.js和webpack.config.prod.js添加alias配置
  nprogress: path.resolve(__dirname, '../node_modules/nprogress'),

//使用
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
  componentWillMount() {
    NProgress.start();    // 页面开始加载时调用 start 方法
  }
  componentDidMount() {
    NProgress.done();  // 页面请求完毕时调用 done 方法
  }
```
### intl-tel-input 国旗插件
* 方式一（npm 安装）
```
//首先
npm install jquery@3.1.1
npm install intl-tel-input

//然后在在webpack.config.dev.js和webpack.config.prod.js中添加alias配置：
      intltelinput: path.resolve(__dirname, '../node_modules/intl-tel-input/build'),     

//最后在组件中使用
import React, { Component } from 'react';
import 'intltelinput/js/intlTelInput.js';
import 'intltelinput/css/intlTelInput.css';
import $ from 'jquery';
export default class IntlTelInput extends Component {
  componentDidMount() {
    $("#phone").intlTelInput();
  }
  render() {
    return (
      <div>
          <input type="text" id='phone' />
      </div>
    )
  }
}

```

* 方式二 第三方库文件放入utils文件夹
```
//首先
npm install jquery@3.1.1

//然后在在webpack.config.dev.js和webpack.config.prod.js中添加alias配置：
      utils: path.resolve(__dirname, '../src/utils'),
//之后将css js img copy到 utils文件夹下的intl-tel-input文件夹中
//最后使用
// 方式2
import React, { Component } from 'react';
import 'utils/intl-tel-input/js/intlTelInput.js';
import 'utils/intl-tel-input/css/intlTelInput.css';
import $ from 'jquery';
export default class IntlTelInput extends Component {
  componentDidMount() {
    $("#phone").intlTelInput();
  }
  render() {
    return (
      <div>
          <input type="text" id='phone' />
      </div>
    )
  }
}
```