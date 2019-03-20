import React, { Component } from 'react'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import $ from 'jquery';
import './demo1.scss';
import Video from '../Video/index'

export default class Index extends Component {
  componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
      // initialSlide: 0,
      autoplay: true,//可选选项，自动滑动
      loop: true,
      shortSwipes: false,
      noSwiping: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        // hideOnClick: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        slideChangeTransitionEnd: function () {
          console.log(this.navigation);
          if (this.isEnd) {
            //  $('.swiper-button-next').css('display','none');
          } else {
            // $('.swiper-button-prev').css('display','none');
          }
        },
      },
    });
    let that = this;
    console.log(that.mySwiper);

    $(".swiper-container").hover(function () {
      that.mySwiper.autoplay.pause();
    }, function () {
      that.mySwiper.autoplay.run();
    });
  }
  render() {
    return (
      <div className='box'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-1 swiper-no-swiping">
              <div><Video /></div>

            </div>
            <div className="swiper-slide swiper-slide-2 swiper-no-swiping">slider2</div>
            <div className="swiper-slide swiper-slide-3 swiper-no-swiping">slider3</div>
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrÎollbar"></div>
        </div>
      </div>
    )
  }
}
