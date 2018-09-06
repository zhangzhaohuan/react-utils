
class InkexDataFeed { };

/* 提供填充配置数据的对象 */
InkexDataFeed.prototype.onReady = function (callback) {
  setTimeout(function () {
    callback({
      exchanges: [],//一个交易所数组
      symbols_types: [],  //一个商品类型过滤器数组
      supports_marks: false,//标识您的 datafeed 是否支持在K线上显示标记
      supports_time: false,//它用于调整时间刻度上的价格比例
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],//服务器支持的周期数组
    });
  }, 0);
};

/*提供一个匹配用户搜索的商品列表。result为预期的商品 */
InkexDataFeed.prototype.searchSymbols = function (userInput, exchange, symbolType, onResultReadyCallback) {
  setTimeout(function () {
    onResultReadyCallback([]);
  }, 0);
};

/*通过商品名称解析商品信息(SymbolInfo)。*/
InkexDataFeed.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
  let symbolInfo = {
    ticker: symbolName,
    name: symbolName.replace('_', '/'),
    description: symbolName.replace('_', '/'),
    type: 'bitcoin',
    session: '24x7',
    timezone: 'Asia/Shanghai',  //这个商品的交易所时区
    minmov: 1,
    minmov2: 0,
    pointvalue: 1,
    has_intraday: true, // 显示商品是否具有日内（分钟）历史数据
    intraday_multipliers: ['1'],
    has_seconds: true,
    seconds_multipliers: ['1'],
    has_daily: false,
    has_weekly_and_monthly: false,
    has_empty_bars: false, //当没有数据时，是否显示空的k线柱
    has_no_volume: false,//商品是否拥有成交量数据
    volume_precision: 1,//整数显示此商品的成交量数字的小数位
    supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
    pricescale: 100,
    data_status: 'streaming'  //数据状态码
  };
  setTimeout(function () {
    onSymbolResolvedCallback(symbolInfo);
  }, 0);
};

InkexDataFeed.prototype.getBars = function (symbolInfo, resolution, fromTime, toTime, onHistoryCallback, onErrorCallback, firstDataRequest) {
  console.log(toTime);
  if (!firstDataRequest) {
    setTimeout(function () {
      onHistoryCallback([], {
        noData: true
      });
    }, 0);
  } else {
    var bars = [];
    var i;
    var n = 1;
    var start = parseInt(new Date().getTime() / 1000) - 2 * 24 * 3600;
    var end = firstDataRequest ? parseInt(new Date().getTime() / 1000) : toTime;
    var p = 1500.01;
    for (i = start / 60; i<toTime / 60; i++) {
    	var c = p + Math.random() * 100 - 50;
    	if (c < 1000) {
    		c = 1000;
    	}
    	bars.push({
    		time: i * 60 * 1000,
    		open: p,
    		high: p + Math.random() * 50,
    		low: c - Math.random() * 30,
    		close: c,//闭盘价
    		volume: Math.random() * 10 //成交量
    	});
    	p = c;
    }
    // console.log(bars);
    onHistoryCallback(bars);
    // var bars = [];
    // var bar = [
    // 	[1533785880000, 1.245000000000000000, 8.245000000000000000, 1.245000000000000000, 8.245000000000000000, 0.642800000000000000],
    // 	[1533785940000, 2.935100000000000000, 2.935100000000000000, 2.935100000000000000, 2.935100000000000000, 1.212500000000000000],
    // 	[1533786120000, 2.935100000000000000, 2.935100000000000000, 2.935100000000000000, 2.935100000000000000, 0.787500000000000000],
    // 	[1533786180000, 1.245000000000000000, 1.245000000000000000, 1.245000000000000000, 1.245000000000000000, 0.357200000000000000],
    // 	[1533795360000, 1.500000000000000000, 1.500000000000000000, 1.500000000000000000, 1.500000000000000000, 0.212500000000000000],
    // 	[1533795420000, 2.936600000000000000, 2.936600000000000000, 2.936600000000000000, 2.936600000000000000, 1.729700000000000000],
    // 	[1533795600000, 2.943500000000000000, 2.947400000000000000, 2.943500000000000000, 2.947400000000000000, 2.508000000000000000],
    // 	[1533796620000, 2.936600000000000000, 2.936600000000000000, 1.500000000000000000, 1.500000000000000000, 0.228100000000000000],
    // 	[1533796680000, 1.077100000000000000, 1.077100000000000000, 1.066900000000000000, 1.066900000000000000, 10.352700000000000000],
    // 	[1533797340000, 1.066900000000000000, 1.066900000000000000, 1.049600000000000000, 1.049600000000000000, 67.620100000000000000],
    // 	[1533797460000, 1.049600000000000000, 1.049600000000000000, 1.025900000000000000, 1.025900000000000000, 64.898300000000000000],
    // 	[1533797640000, 1.025900000000000000, 1.025900000000000000, 1.002300000000000000, 1.002300000000000000, 562.928400000000000000],


    // 	[1533797700000, 1.000000000000000000, 2.000000000000000000, 1.000000000000000000, 2.000000000000000000, 10.000000000000000000],
    // 	[1533797880000, 1.000000000000000000, 1.300000000000000000, 1.000000000000000000, 1.300000000000000000, 194.905100000000000000],
    // 	[1533798000000, 8.000000000000000000, 8.000000000000000000, 2.000000000000000000, 2.000000000000000000, 4.000000000000000000],
    // 	[1533798120000, 6.947400000000000000, 8.947400000000000000, 2.947400000000000000, 2.947400000000000000, 0.200000000000000000],
    // 	[1533798420000, 2.000000000000000000, 2.000000000000000000, 2.000000000000000000, 2.000000000000000000, 0.803500000000000000],
    // 	[1533798540000, 1.000000000000000000, 1.000000000000000000, 1.000000000000000000, 1.000000000000000000, 0.096500000000000000],
    // 	[1533798660000, 2.947400000000000000, 12.947400000000000000, 2.947400000000000000, 8.947400000000000000, 0.050000000000000000],
    // 	[1533798780000, 12.000000000000000000, 12.000000000000000000, 2.000000000000000000, 2.000000000000000000, 0.003500000000000000],
    // 	[1533798960000, 10.000000000000000000, 12.999500000000000000, 1.000000000000000000, 2.999500000000000000, 2022.680400000000000000]
    // 	[1533799140000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 1.000000000000000000],
    // 	[1533799440000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 1.000000000000000000],
    // 	[1533799680000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 100.000000000000000000, 1.000000000000000000],
    // 	[1533800220000, 200.000000000000000000, 200.000000000000000000, 200.000000000000000000, 200.000000000000000000, 2.000000000000000000],
    // 	[1533800340000, 800.000000000000000000, 800.000000000000000000, 800.000000000000000000, 800.000000000000000000, 1.000000000000000000],
    // 	[1533800940000, 800.000000000000000000, 800.000000000000000000, 800.000000000000000000, 800.000000000000000000, 1.000000000000000000]
    // ]
    // for (var i = 0; i < bar.length; i++) {
    // 	bars.push({
    // 		time: bar[i][0],
    // 		open: bar[i][1],
    // 		high: bar[i][2],
    // 		low: bar[i][3],
    // 		close: bar[i][4],
    // 		volume: bar[i][5],
    // 	})
    // }
    // console.log(onHistoryCallback,bars);
    // onHistoryCallback(bars);
   //window.onHistoryCallback = onHistoryCallback;
    // console.log(window.HISTORY_BARS,'dsadsadasdasdsadsadssda');
    // onHistoryCallback(window.HISTORY_BARS.map(v=>{
    // 	return {
    // 		time: v[0],
    // 		open: v[1],
    // 		high: v[2],
    // 		low: v[3],
    // 		close: v[4],
    // 		volume: v[5]

    // 	}
    // }))
  }
};

/**订阅K线数据。图表库将调用onRealtimeCallback方法以更新实时数据 */
InkexDataFeed.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
  if (window.socket) {
    window.socket.on('topic_bar', function (message) {
      if (window.marketName === message.symbol && message.type === 'K_1_MIN') {
        var obj = {};
        obj.time = message.data[0];
        obj.open = message.data[1];
        obj.high = message.data[2];
        obj.low = message.data[3];
        obj.close = message.data[4];
        obj.volume = message.data[5];
        onRealtimeCallback(obj);
      }
    });
  }
};


// 取消订阅K线数据。在调用subscribeBars方法时,图表库将跳过与subscriberUID相同的对象。
InkexDataFeed.prototype.unsubscribeBars = function (subscriberUID) {
  console.log(subscriberUID);
};

export default InkexDataFeed;