import React, { Component } from 'react'
import Symbols from './symbol'
export default class componentName extends Component {
  render() {
    // function foo({ x, y = 5 } = {}) {
    //   console.log(x, y);
    // };
    function foo({ x = 4, y = 5 } = {}) {
      console.log(x, y);
    }

    foo();


    function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
      console.log(body);
      console.log(method);
      console.log(headers);
    }

    fetch('http://example.com');



    return (
      <div>
        <Symbols />
      </div>
    )
  }
}
