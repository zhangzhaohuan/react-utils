import React, { Component } from 'react'
import EventLoop1 from './EventLoop/demo2';
import Debounce from './Throttle/debounce.js';
import Throttle from './Throttle/throttle'

export default class Index extends Component {
  render() {
    return (
      <div>
        {/* <EventLoop1 /> */}
        {/* <Debounce /> */}
        <Throttle />
      </div>
    )
  }
}
