import React, { Component } from 'react'

/**
 * SVG 渐变:1.线性【垂直、水平】2.放射性
 * SVG 渐变必须在 <defs> 标签中进行定义
 */

export default class Gradient extends Component {
    render() {
        return (
            <div
            >


                <svg width="100%" height="100%" style={{ position: "absolute" }} version="1.1" >
                    {/* *********** 线性渐变 */}
                    {/* 水平渐变 y值相等 start*/}
                    <defs>
                        <linearGradient id="horizon—color" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255, 255, 0)', 'stopOpacity': '1' }} />
                            <stop offset="50%" style={{ 'stopColor': 'rgb(0, 0, 205)', 'stopOpacity': '1' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(255,0,0)', 'stopOpacity': '1' }} />
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="horizon-opacity" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255, 255, 0)', 'stopOpacity': '0.5' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(255,255,0)', 'stopOpacity': '1' }} />
                        </linearGradient>
                    </defs>
                    {/* 水平渐变 end*/}


                    {/* 垂直渐变 x值相等 start*/}
                    <defs>
                        <linearGradient id="vertial-color" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255, 255, 0)', 'stopOpacity': '1' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)', 'stopOpacity': '1' }} />
                        </linearGradient>
                    </defs>
                    {/* 垂直渐变 end*/}


                    {/* 左上角->右下角渐变 */}
                    <defs>
                        <linearGradient id="color" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255, 255, 0)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </linearGradient>
                    </defs>


                    {/* ******************放射渐变 */}
                    {/* 
                        * .cx与cy分别确定圆心的横坐标和纵坐标
                        * .r规定圆的半径尺寸。 
                        * .fx与fy属性用来规定渐变焦点坐标,焦点通俗的说就是渐变的起点位置，此位置处颜色值保持最初状态。                                           *                

                    */}
                    <defs>
                        <radialGradient id="radialGradient-color" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>

                    <defs>
                        <radialGradient id="radialGradient-color2" cx="20%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>

                    <defs>
                        <radialGradient id="radialGradient-color3" cx="50%" cy="20%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>
                    <defs>
                        <radialGradient id="radialGradient-color4" cx="20%" cy="20%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>

                    <defs>
                        <radialGradient id="radialGradient-color5" cx="50%" cy="50%" r="50%" fx="50%" fy="20%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>
                    <defs>
                        <radialGradient id="radialGradient-color6" cx="70%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200, 200, 200)' }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,205)' }} />
                        </radialGradient>
                    </defs>


                    <ellipse cx="200" cy="190" rx="85" ry="55" style={{ "fill": 'url(#horizon—color)' }} />
                    <ellipse cx="400" cy="190" rx="85" ry="55" style={{ "fill": 'url(#horizon-opacity)' }} />
                    <ellipse cx="600" cy="190" rx="85" ry="55" style={{ "fill": 'url(#vertial-color)' }} />
                    <ellipse cx="800" cy="190" rx="85" ry="55" style={{ "fill": 'url(#color)' }} />


                    <ellipse cx="200" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color)' }} />
                    <ellipse cx="400" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color2)' }} />
                    <ellipse cx="600" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color3)' }} />
                    <ellipse cx="800" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color4)' }} />
                    <ellipse cx="1000" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color5)' }} />
                    <ellipse cx="1200" cy="500" rx="85" ry="85" style={{ "fill": 'url(#radialGradient-color6)' }} />







                </svg>
            </div>
        )
    }
}

