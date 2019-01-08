import React, { Component } from 'react'
import moment from 'moment';

export default class componentName extends Component {
  render() {
    console.log();
    console.log(moment(1545378944145).format('YYYY-MM-DD HH:mm:ss'));
    console.log(moment(1545378944129).format('YYYY-MM-DD HH:mm:ss'));
    console.log(moment(1545378944115).format('YYYY-MM-DD HH:mm:ss'));
    return (
      <div>

      </div>
    )
  }
}
