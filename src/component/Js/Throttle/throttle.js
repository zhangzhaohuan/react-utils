import React, { Component } from 'react'

export default class componentName extends Component {
  throttle(fn, delay) {
    var timer = null;
    return function () { 
      if (timer == null){
        timer = setTimeout(function () {
          fn();
          timer = null;
          clearTimeout(timer);
        }, delay);
      }
    };
  }
  log(name) {
    console.log('123' + name);
  }
  render() {
    return (
      <div>
        <button onClick={this.throttle(this.log.bind(this,'zhangsan'),1000)}>节流</button>        
      </div>
    )
  }
}
