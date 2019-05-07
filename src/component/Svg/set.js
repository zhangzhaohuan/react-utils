/**
 * set元素可以用来设定一个属性值，并为该值赋予一个持续时间。
 */

import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <svg width="100%" height="100%" version="1.1" style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(100,100)">
                        <text id="TextElement" x="0" y="0" style={{ fontFamily: 'Verdana', fontSize: '24', visibility: "hidden" }}> It's SVG!
                            <set attributeName="visibility" attributeType="CSS" to="visible" begin="1s" dur="5s" fill="freeze" />
                            <animateMotion path="M 0 0 L 100 100" begin="1s" dur="5s" fill="freeze" />
                            <animate attributeName="fill" attributeType="XML" begin="1s" dur="5s" from='red' to='yellow' fill="freeze" />
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="-30" to="0" begin="1s" dur="5s" additive="sum" fill="freeze" />

                            {/************* additive:【sum、replace】 */}
                            {/* 
                            sum——动画将 附加 到属性和其他较低优先级动画的基础值。
                            replace——动画将 覆盖 属性和其他较低优先级动画的基础值。这是默认的，但是其行为也受到动画值属性by和to的影响 */}
                            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1" to="3" additive="sum" begin="1s" dur="5s" fill="freeze" />
                        </text>
                    </g>
                    <g>
                        <rect
                            x="10" y="10"
                            width="100" height="50"
                            fill="red">
                            <animate attributeType="XML"
                                attributeName="x"
                                from="10" to="50"
                                dur="1s"
                                accumulate="sum"
                                repeatCount="2"
                                begin="click"
                                fill="freeze">
                            </animate>
                        </rect>
                    </g>
                </svg>

            </div>
        )
    }
}
