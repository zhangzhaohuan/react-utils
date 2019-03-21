import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {
    let s1 = Symbol('foo');
    let s2 = Symbol('foo');
    console.log(s1);
    console.log(s2);
    console.log(s1.toString());
    console.log(s2.toString());


  }
  render() {
    return (
      <div>
        symbol
      </div>
    )
  }
}
