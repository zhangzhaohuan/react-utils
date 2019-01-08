/**
 * 保留小数的位数:
 * @param {*} number 
 * @param {*} decimals 
 * @param {*} roundtag 
 */
export function decimalsNum(number, decimals, roundtag) {
  let num = (number + '').replace(/[^0-9+-Ee.]/g, ''); //去除非法字符
  let dec = Math.abs(decimals);
  let tag = roundtag || 'ceil'; //"ceil","floor","round","slice"
  if (+num === Math.ceil(+num)) {
    return +num;
    //整数
  } else {
    //小数
    if ((number + '').split('.')[1].length > decimals) {
      let k = Math.pow(10, dec);
      let n = +num * k;
      switch (tag) {
        case 'floor':
          n = Math.floor(n);
          break;
        case 'ceil':
          n = Math.ceil(n);
          break;
        case 'slice':
          if (+n === Math.ceil(+n)) {
            break;
          } else {
            n = +(n + '').split('.')[0];
            break;
          }
        default:
          n = Math.round(n);
          break;
      }
      return n / k;
    } else {
      return number;
    }
  }
}

/**
 * 保留小数的位数:
 * @param {string} value 传入数字字符串:数字字符串必须规范;不规范:[.5,科学计数法]
 * @param {number} decimals  保留的小数位数
 * @param {string} roundtag  向上、向下、四舍五入、截取[ceil,floor,round,slice]
 * @param {boolean} auto 小数不够时是否补零[default:false]
 */
export function decimalsStr(value, decimals, roundtag) {
  var validValue = value.replace(/[^0-9+-Ee.]/g, ''); //去除非法字符
  console.log(validValue);
  decimals = Math.abs(decimals);
  roundtag = roundtag || 'slice';
  var isInteger;
  var index = validValue.indexOf('.');
  index == -1 ? isInteger = true : isInteger = false;
  if (isInteger) {
    return validValue;
  } else {
    var _integer = validValue.slice(0, index);
    var _decimal = validValue.slice(index + 1);
    switch (roundtag) {
      case 'slice':
        if (_decimal.length > decimals) {
          return _integer + '.' + _decimal.slice(0, decimals);
        } else {
          return validValue;
        }
      case 'round':
        break;
      case 'ceil':
        break;
      case 'floor':
        break;
      default:
        break;
    }
  }
}

/**
 * 
 * @param {number} val  
 * @param {number} decimal 保留小数位数(若为小数)
 * @return {string}
 */
export function toNonExponential(val) {
  var str = val.toString();
  var isExponential = /e{1}/.test(str);
  if (!isExponential) {
    return str;
  } else {
    var exponential = val.toExponential();  //string
    var matchArray = (/^(\d{1})(.\d+)?e{1}(\+|\-)(\d+)/).exec(exponential);
    if (matchArray != null) {
      var result = '';
      var _integer = matchArray[1];  //string
      var _decimal = matchArray[2] ? matchArray[2].slice(1) : matchArray[2];  //undefined||string
      var _symbol = matchArray[3];  //string
      var _power = matchArray[4]; //string
      if (_decimal == undefined && _symbol == '+') {
        //整数、指数+
        result = _integer;
        for (var i = 0; i < _power; i++) {
          result = result.concat('0');
        }
        return result;
      } else if (_decimal == undefined && _symbol == '-') {
        //整数、指数-
        console.log(_integer.length);
        console.log(_power);
        if (_integer.length <= _power) {
          var zero = '';
          for (var i = 0; i < _power - _integer.length; i++) {
            zero = zero + '0';
          }
          result = '0.' + zero + _integer;
          console.log(result);
          return result;
        } else {
          return _integer.slice(0, -(_power)) + '.' + _integer.slice(-(_power))
        }
      } else if (_decimal != undefined && _symbol == '+') {
        //小数、指数+
        if (_decimal.length == _power) {
          return _integer + _decimal;
        } else if (_decimal.length > _power) {
          return _integer + _decimal.slice(0, _power) + '.' + _decimal.slice(_power)
        } else if (_decimal.length < _power) {
          var zero = '';
          for (var i = 0; i < _power - _decimal.length; i++) {
            zero = zero.concat('0');
          }
          return _integer + _decimal + zero
        }
      } else if (_decimal != undefined && _symbol == '-') {
        //小数、指数-
        if (_integer.length > _power) {
          return _integer.slice(0, -(_power)) + '.' + _integer.slice(-_power) + _decimal
        } else if (_integer.length <= _power) {
          var zero = '';
          for (var i = 0; i < _power - _integer.length; i++) {
            zero = zero.concat('0');
          }
          return '0.' + zero + _integer + _decimal;
        }
      }
    } else {
      return str;
    }
  }
}