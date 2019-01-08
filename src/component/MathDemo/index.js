import React, { Component } from 'react'
import { toNonExponential, decimalsStr } from 'utils/math/common.js'

export default class componentName extends Component {

  render() {
    // console.log(toNonExponential(123.123e2, 8));
    console.log(decimalsStr('123.12444',2));

    return (
      <div>

      </div>
    )
  }
}
