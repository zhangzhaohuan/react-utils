// 方式2
import React, { Component } from 'react';
import 'utils/intl-tel-input/js/intlTelInput.js';
import 'utils/intl-tel-input/css/intlTelInput.css';
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


