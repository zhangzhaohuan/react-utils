import React, { Component } from 'react'
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';
import './demo2.scss'
export default class Index extends Component {
  componentDidMount() {
    // var mySwiper = new Swiper('.swiper-container', {
    //   initialSlide:0,
    //   autoplay: true,//可选选项，自动滑动
    //   loop : true,
    // })
  }
  render() {
    return (
      <div className='box'>
        {/* <div className="swiper-container">
          <div className="swiper-wrapper">
            <div data-swiper-parallax-opacity='0.5' className="swiper-slide swiper-slide-1">slider1</div>
            <div data-swiper-parallax-opacity='0.5' className="swiper-slide swiper-slide-2">slider2</div>
            <div data-swiper-parallax-opacity='0.5' className="swiper-slide swiper-slide-3">slider3</div>
          </div>
        </div> */}
      </div>
    )
  }
}
