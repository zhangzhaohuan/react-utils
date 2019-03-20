import React, { Component } from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
export default class componentName extends Component {
  render() {
    return (
      <div>
        <video
          // autoplay='true'
          id="my-player"
          className="video-js vjs-big-play-centered"
          controls
          preload="auto"
          poster="//vjs.zencdn.net/v/oceans.png"
          width='500px'
          height='400px'
          data-setup='{}'>
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
          <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
          </a>
          </p>
        </video>
      </div>
    )
  }
}
