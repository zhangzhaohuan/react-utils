import React, { Component } from 'react'
import { Decimal } from 'decimal.js';
export default class componentName extends Component {
  constructor() {
    super();
    /**加法 */
    console.log(Decimal.add(new Decimal(0.1), new Decimal(0.2)));
    /** 乘法 */
    console.log((new Decimal(1.2345678901234567890123456789e-2)));
    
    /**toPrecision() */
    var deci5 = new Decimal(255.5);
    var deci6 = new Decimal(454.6);

    console.log(deci5.toPrecision(5));
    console.log(deci5.toPrecision(5, Decimal.ROUND_UP));
    console.log(deci5.toPrecision(5, Decimal.DOWN));

    console.log('----------1---------------');
    console.log(deci5.toPrecision(1));
    console.log(deci5.toPrecision(1, Decimal.ROUND_UP));
    console.log(deci5.toPrecision(1, Decimal.DOWN));

    console.log('-----------2--------------');
    console.log(deci5.toPrecision(2));
    console.log(deci5.toPrecision(2, Decimal.ROUND_UP));
    console.log(deci5.toPrecision(2, Decimal.DOWN));

    console.log('-----------3--------------');
    console.log(deci5.toPrecision(3));
    console.log(deci5.toPrecision(3, Decimal.ROUND_UP));
    console.log(deci5.toPrecision(3, Decimal.DOWN));

    console.log('-------------2------------');
    console.log(deci6.toPrecision(2));
    console.log(deci6.toPrecision(2, Decimal.ROUND_UP));
    console.log(deci6.toPrecision(2, Decimal.DOWN));


    var x = 45.6
    var y = new Decimal(x);
    console.log(y.toPrecision());// '45.6'
    console.log(y.toPrecision(2, Decimal.ROUND_UP));// '4.6e+1'
    console.log(y.toPrecision(2, Decimal.DOWN));// '4.5e+1'
    // var ex = '123131231231231231313123123';
    var ex = new Decimal(1.2313123123123122e+26);
    console.log(ex);
    
    this.state = {
      aa: 123
    }
  }


  render() {
    return (
      <div>
        {
          this.state.aa
        }
      </div>
    )
  }
}
