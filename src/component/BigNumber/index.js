import React, { Component } from 'react'
import { BigNumber } from 'bignumber.js';

export default class Index extends Component {
  componentDidMount() {
    /* *
     * 加 plus
     * 减 minus
     * 乘 multipliedBy
     * 除 dividedBy
     * */

    /**decimalPlaces([dp[,rm]]) 精度调整 **
     * dp 小数位数
     * rm round mode: 0、1、4
     * @return {BigNumber} 位数不够时,不补0;
    */
    /**round mode
     * ROUND_UP  0 向远离0的方向舍入  
     * ROUND_DOWN 1 向零方向舍入
     * ROUND_HALF_UP 4 两边距离相同时，远离0: 1.25->1.3
    */

    let x = new BigNumber(1.124);
    console.log(x.minus(new BigNumber(0.1)));
    x.plus(2);
    console.log(x.toNumber());

    console.log(x > 2);
    console.log(x < 2);


    // console.log(typeof x);
    console.log(x.decimalPlaces(2, 0).toString());
    // console.log(x.decimalPlaces(2, 1).toString());
    // console.log(x.decimalPlaces(2, 4).toString());

    /**toFixed(dp)
     * @return {string} 不会返回科学计数法;位数不够自动补零;dp不填时返回原数值
     * @param dp 小数位数
     */
    // let y = new BigNumber(1e-7);
    // console.log(y.toFixed());

    /**format */
    console.log(new BigNumber('1e-9').abs().toFixed(8));
    console.log(new BigNumber('-0.0001').abs());
    console.log(new BigNumber(0.2).isGreaterThanOrEqualTo('0.1'));
    var aa = new BigNumber('0.01');
    var bb = new BigNumber('0.01');
    console.log(aa.comparedTo(bb));
    console.log(bb.comparedTo(aa));

    console.log(bb.isGreaterThanOrEqualTo(aa));


    // comparedTo 

  }
  render() {
    return (
      <div>
        BigNumber
      </div>
    )
  }
}
