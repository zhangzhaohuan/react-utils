import React, { Component } from 'react'
import { loadavg } from 'os';

export default class componentName extends Component {
  debounce(fn, delay) {
    var timer = null;
    return function () { 
      if (timer != null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, delay);
    };
  }
  log(name) {
    console.log('123' + name);
  }
  render() {
    return (
      <div>
        <button onClick={this.debounce(this.log.bind(this,'zhangsan'),200)}>防抖</button>
      </div>
    )
  }
}
