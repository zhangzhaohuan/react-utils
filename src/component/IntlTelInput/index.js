// 方式一
import React, { Component } from 'react';
import 'intltelinput/js/intlTelInput.js';
import 'intltelinput/css/intlTelInput.css';
import $ from 'jquery';
export default class IntlTelInput extends Component {
  componentDidMount() {
    $("#phone").intlTelInput();
  }
  render() {
    return (
      <div>
          <input type="text" id='phone' />
      </div>
    )
  }
}
