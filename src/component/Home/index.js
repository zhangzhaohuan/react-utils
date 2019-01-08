import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
const CancelToken = axios.CancelToken;
const instance = axios.create({
  timeout: 2000,
});
export default class Home extends Component {
  constructor() {
    super();
    this.cancel1 = function () { };
    this.cancel2 = function () { };
  }
  componentDidMount() {
    /**
     * 删除请求： new CancelToken
     */
    const that = this;
    setTimeout(function () {
      instance.get(`/api/auth/user/bind/info/${encodeURIComponent('15764299983@163.com')}`, {
        cancelToken: new CancelToken(function executor(c) {
          that.cancel1 = c;
          console.log('axios1');
        })
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
      instance.get(`/api/auth/user/email/check/${encodeURIComponent('15764299983@163.com')}`, {
        cancelToken: new CancelToken(function executor(c) {
          that.cancel2 = c;
          console.log('axios2');
        })
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }, 300);
  }

  componentWillUnmount() {
    this.cancel1('Operation1 canceled by the user.');
    this.cancel2('Operation2 canceled by the user.');
  }

  render() {
    return (
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
            <Link to='/decimal'>decimal.js</Link>
          </li>
          <li>
            <Link to='/math'>math</Link>
          </li>
          <li>
            <Link to='/big-number'>bignumber.js</Link>
          </li>
          <li>
            <Link to='/moment'>moment.js</Link>
          </li>
          <li>
            <Link to='/braft-editor'>braft-editor.js</Link>
          </li>
          <li>
            <Link to='/'>home</Link>
          </li>
        </ul>
      </div>
    )
  }
}
