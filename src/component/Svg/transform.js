import React, { Component, Fragment } from 'react'
import './transform.css';

export default class componentName extends Component {
    render() {
        return (
            <div className='transform-wrap'>
                {/* 
                * css tranform中心是几何中心
                * svg transform中心是用户坐标系(0,0);.SVG中元素的变换，实质是坐标系的变换，从而达到视觉上的位移或者形状变化的效果
                */}
                <svg>
                    <rect id="ant"
                        x="60" y="60"
                        width="100"
                        height="100"
                        fill="blue" />
                </svg>
                <div className='transform'></div>
            </div>
        )
    }
}
