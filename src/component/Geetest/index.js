/**
 * 极验
 */
import React, { Component } from 'react'
import 'utils/geetest/gt.js';
import { initGeetest } from 'service/axios/module1.js'

export default class Gtest extends Component {
  async componentDidMount() {
    const res = await initGeetest();
    const data = res.data;
    console.log(res.data);
    // {"success":1,"challenge":"bc8cf0405266ad6af8b8035533efc73d","gt":"44d6e413fd041e7a8e61bd6d72d54b1d"}
    window.initGeetest({
      // 以下配置参数来自服务端 SDK
      gt: data.gt,//验证 id，极验后台申请得到
      challenge: data.challenge,//验证流水号，后服务端 SDK 向极验服务器申请得到
      offline: !data.success,//极验API服务器是否宕机（即处于 fallback 状态）
      new_captcha: true,//宕机情况下使用，表示验证是 3.0 还是 2.0，3.0 的 sdk 该字段为 true
      width: '300px',//注意只能调节宽度，高度固定不变。默认：300px * 44px。
      product: 'float',//设置下一步验证的展现形式
      lang: 'zh-cn'  //设置验证界面文字的语言
    }, (captchaObj) => {
      // 这里可以调用验证实例 captchaObj 的实例方法
      captchaObj.appendTo('#gt');//将验证按钮插入到宿主页面中#gt元素内
      //监听验证成功事件
      captchaObj.onSuccess((e) => {
        const status = captchaObj.getValidate();//返回一个对象，该对象包含 geetest_challenge，geetest_validate，geetest_seccode 字段。
        //{geetest_challenge: "9399311ff299c4e0d0718e89d9876c76ca", geetest_validate: "9b49e063610d8a006696eb3cdecfbe96", geetest_seccode: "9b49e063610d8a006696eb3cdecfbe96|jordan"}
        console.log(status);
        // this.props.getCaptchaStatus({
        //     status: true
        // })
      });
      //监听验证按钮的 DOM 生成完毕事件
      captchaObj.onReady(() => {
        console.log('验证按钮的 DOM 生成完毕');
      })
      // 监听验证出错事件，提供用户或者刷新页面重试
      captchaObj.onError(() => {
        // console.log('error');
      });
    })
  }

  render() {
    return (
      <div id='gt'>
      </div>
    )
  }
}
