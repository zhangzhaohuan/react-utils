import React, { Component } from 'react'
import InkexDataFeed from './InkexDataFeed'
export default class TraddingView extends Component {

  openTradeview = () => {
   window.tvWidget = new window.TradingView.widget({
      symbol: 'BTC', //商品 required
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new InkexDataFeed(),
      interval: '1',  //周期 required
      container_id: 'tv_chart_container',  //指定要包含widget的DOM元素id  required
      library_path: '/charting_library/',
      timezone: "Asia/Shanghai",//初始化时区
      locale: 'zh',//语言
      //从左向右："头部搜索框,"最下面的时间区域","分割线","右上角保存功能","左上边时间戳的功能","左上角天平标志","回到上一页的切换功能",拍照功能(右上角),"这个没看到区别","这个也没看到区别"
      disabled_features: ["header_symbol_search", "timeframes_toolbar", "volume_force_overlay", "header_saveload", "header_resolutions", "header_compare", "header_undo_redo", "header_screenshot", "display_market_status", "adaptive_logo"], //禁用部分功能
      enabled_features: ['study_templates',],
      drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
      charts_storage_url: 'https://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      fullscreen: false,
      autosize: true,
      studies_overrides: {},
      toolbar_bg: "#222c3c",//侧边栏背景颜色
      debug: false,
      loading_screen: { backgroundColor: "#222c3c" },
      overrides: {
        "paneProperties.background": '#222c3c', //背景颜色
        "paneProperties.vertGridProperties.color": "#242e47", //竖线颜色
        "paneProperties.horzGridProperties.color": "#242e47", //横线颜色
        "paneProperties.crossHairProperties.color": "#42b6f6", //十字线颜色
        "paneProperties.topMargin": 5,
        "paneProperties.bottomMargin": 5,//边际线百分比 用于自动缩放
        "mainSeriesProperties.barStyle.upColor": "#6ba583",
        "mainSeriesProperties.barStyle.downColor": "#d75442",
        "paneProperties.legendProperties.showLegend": false, //左上角折叠信息
        "scalesProperties.textColor": "#42b6f6", //文字颜色
        "mainSeriesProperties.candleStyle": {
          upColor: "#d83636",//蜡烛图中心的颜色以及右侧显示的颜色
          downColor: "#00ce7d",
          drawBorder: true,
          borderColor: "#ff3933",
          borderUpColor: "#d83636",//蜡烛线的边框颜色和左上角的字体颜色
          borderDownColor: "#00ce7d",
          drawWick: true,
          wickColor: "#737375",
          wickUpColor: "#d83636",//蜡烛线的颜色
          wickDownColor: "#00ce7d",
          barColorsOnPrevClose: !1,
        }
      },
      studies_overrides: {
        //底部柱状图颜色
        "volume.volume.color.0": "#00ce7d",
        "volume.volume.color.1": "#d83636",
        "volume.volume.transparency": 50,
      },
    });

    // window.tvWidget.onChartReady(() => {
    //     widget.chart().createStudy("Moving Average", false, false, [5], null, { "plot.color": "#9660c4" });
    //     widget.chart().createStudy("Moving Average", false, false, [10], null, { "plot.color": "#84aad5" });
    //     widget.chart().createStudy("Moving Average", false, false, [20], null, { "plot.color": "#55b263" });
    //     var c = widget.chart().getAllStudies()
    //     function setMAShow() {
    //         widget.chart().setEntityVisibility(c[0].id, true)
    //         widget.chart().setEntityVisibility(c[1].id, true)
    //         widget.chart().setEntityVisibility(c[2].id, true)
    //     }
    //     function setMAHide() {
    //         widget.chart().setEntityVisibility(c[0].id, false)
    //         widget.chart().setEntityVisibility(c[1].id, false)
    //         widget.chart().setEntityVisibility(c[2].id, false)
    //     }
    // });
  }

  componentDidMount() {
   this.openTradeview();
  }

  componentWillUnmount() {
    window.tvWidget = null;
    window.openTradeview = null;
  }

  render() {
    return (
      <div
        id={'tv_chart_container'}
        className={'TVChartContainer'}
        style={{ height: '374px', background: '#222c3c' }}
      />
    )
  }
}

