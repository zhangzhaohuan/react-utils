import React, { Component } from 'react'

/**
 * svg text
 * svg tspan
 * svg textPath
 * 
 */


/**
 * SVG填充:fill、fill-opacity
 * SVG描边:stroke、stroke-opacity、stroke-dasharray【虚线】
 */

/**
 * 文本填充
 * 文本描边
 */

export default class componentName extends Component {
    render() {
        return (
            <div>
                <svg width="200" height="200">
                    {/* y规定字符基线位置 */}
                    <text x="0 10 40 60" y="20 40" fill='red'>softwhy</text>


                    {/* <text x="50%" y="50%">softwhy</text> */}


                    {/* x和y规定的是位置的绝对值，而dx和dy则是规定的一个绝对值的增量 */}
                    <text x="10 30" y="0" dx="10,30" dy="10,20">softwhy</text>

                </svg>
                <svg width="400" height="200">
                    <text x="100" y="100" rotate="30">
                        <tspan>蚂蚁部落一</tspan>
                        <tspan x="10" y="10" rotate="0">蚂蚁部落二</tspan>
                    </text>
                </svg>
                <svg width="400" height="200">
                    <defs>
                        <path id="myTextPath" d="M20,20 L160,20 L160,160 L20 160" />
                    </defs>
                    <text fill='red'>
                        <textPath xlinkHref="#myTextPath">
                            蚂蚁部落欢迎您，本站地址在青岛市南区，网址是www.softwhy.com
                        </textPath>
                    </text>
                </svg>

                {/* 虚线 start */}
                <svg width="400" height="200">
                    <rect x="10" y="10"
                        width="300" height="300"
                        stroke="red"
                        stroke-dasharray="10,20"
                        stroke-width='2'
                        fill="green" />
                </svg>
                {/* 虚线 end */}


                {/* 文本填充、文本描边start */}
                <svg width="400" height="200">
                    <text x="100" y="100"
                        style={{ font: '4.5em/1 Open Sans, Impact' }}
                        stroke="red"
                        stroke-opacity="0.5"
                        stroke-width="5px">蚂蚁部落</text>
                    {/* stroke属性值除了是颜色之外，也可以是渐变对象或者pattern图案 */}
                    <defs>
                        <linearGradient id="ant" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="red" />
                            <stop offset="100%" stop-color="green" />
                        </linearGradient>
                    </defs>
                    <text x="20" y="20"
                        style={{ font: '1.5em Open Sans, Impact' }}
                        stroke="url(#ant)"
                        stroke-opacity="0.5"
                        stroke-width="5px">蚂蚁部落</text>
                </svg>

                {/* 文本填充、文本描边end */}

            </div>
        )
    }
}
