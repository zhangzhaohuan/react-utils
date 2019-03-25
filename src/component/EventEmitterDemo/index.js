import React, { Component } from 'react'
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

export default class Father extends Component {
  constructor() {
    super();
    myEmitter.on('event', () => {
      console.log('触发事件');
    });

  }
  componentDidMount() {
    myEmitter.emit('event');
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
