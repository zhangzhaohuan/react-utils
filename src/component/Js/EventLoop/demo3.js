
import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    console.log('script start');

    setTimeout(function () {
      console.log('setTimeout1');
      Promise.resolve().then(function () {
        console.log('promise1');
      });
    }, 0);


    setTimeout(function () {
      console.log('setTimeout2');
      Promise.resolve().then(function () {
        console.log('promise2');
      });
    }, 0);


    console.log('script end');

    return (
      <div>

      </div>
    )
  }
}
