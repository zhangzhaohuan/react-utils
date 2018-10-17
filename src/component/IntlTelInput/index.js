/**
 * 方式一 npm install
 * 选中的outline是浏览器默认样式，可以reset
 */
import React, { Component } from 'react';
import 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import $ from 'jquery';
export default class IntlTelInput extends Component {
  componentDidMount() {
    $("#phone").intlTelInput({
      preferredCountries: ['cn'],
    });
  }
  render() {
    return (
      <div>
        <input type="text" id='phone' />
      </div>
    )
  }
}
