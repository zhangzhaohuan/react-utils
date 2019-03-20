import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount() {
    // this.function5();
    // this.function6();
    this.function8();
  }

  function5() {
    let data = {
      name: 'boss',
      age: 3
    };
    console.log(data.age);  //3


    observe(data);
    console.log(data.age);//4


    data.age = 5;
    console.log(data.age);//7


    function observe(data) {
      Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key]);
      });
    }

    function defineReactive(data, key, val) {
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: function () {
          return val + 1;
        },
        set: function (newValue) {
          val = newValue + 1;
        }
      });
    }
  }


  function6() {
    const arr = [1, 2, 3, 4, 5, 6];
    const res = arr.filter(value => value % 2)
      .map(value => value * value)
      .reduce((a, b) => a + b);

    console.log(res);   //35
    console.log(arr.pop()); // 6
    console.log(arr);//[1,2,3,4,5]


  }

  // 计算数组最大差值  [12, 5, 11, 7, 33, 9]
  function8() {
    function method1() {
      let arr = [12, 5, 11, 7, 33, 9];
      let max = Math.max.apply(null, arr);
      let min = Math.min.apply(null, arr);
      let diff = max - min;
      console.log(diff);
    }
    function method2() {
      let arr = [12, 5, 11, 7, 33, 9];
      let diff = Math.abs(arr[1] - arr[0]);
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (Math.abs(arr[i] - arr[j]) > diff) {
            diff = Math.abs(arr[i] - arr[j]);
          }
        }
      }
      console.log(diff);
    }
    method2();
  }

  /**
   * 检查屏幕是否在可视区域
   * 
   *  */

  function9() {
    let offsetTop;// 顶部的距离
    let offsetHeight;//元素本省的高度
    let clientHeight;//可见区域的高度
    let scrollTop;// 滚动的距离
    offsetTop + offsetHeight - clientHeight < scrollTop < offsetTop;
  }

  render() {
    return (
      <div>
        boss
      </div>
    )
  }
}
