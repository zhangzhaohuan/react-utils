## 第三库在react-create-app中的使用
### nprogress.js
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
