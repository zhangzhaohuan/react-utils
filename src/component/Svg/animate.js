import React, { Component } from 'react'

export default class SvgAnimate extends Component {
    render() {
        return (
            <div>
                <svg width="100%" height="100%" style={{ position: "absolute" }} version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="100" y="0" width="250" height="250" style={{ fill: 'blue' }}>
                        <animate attributeType="CSS" attributeName="opacity"
                            from="1" to="0" dur="2s" repeatCount="indefinite" />
                        <animate attributeType="XML" attributeName="fill"
                            from="red" to="blue" dur="2s" repeatCount="indefinite" />
                        <animate attributeType="XML" attributeName="width"
                            from="250" to="100" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="100" y="300" width="250" height="250" style={{ fill: 'blue' }}>
                        <animate id='animate1' attributeType="CSS" attributeName="opacity"
                            from="1" to="0" dur="2s" />
                        <animate id='animate2' attributeType="XML" attributeName="fill"
                            from="red" to="blue" dur="1s" begin='animate1.end' repeatCount="indefinite" />
                        {/* <animate  id='animate3' attributeType="XML" attributeName="width"
                            from="250" to="100" dur="2s" repeatCount="indefinite" /> */}
                    </rect>
                    <g transform="translate(100,100)">
                        <text id="TextElement" x="0" y="500" style={{
                            fontFamily: 'Verdana', fontSize: '24', visibility: 'hidden'
                        }}> It's SVG!
                            <set attributeName="visibility" attributeType="CSS" to="visible" begin="1s" dur="5s" fill="freeze" />
                            <animateMotion path="M 0 0 L 100 100" begin="1s" dur="5s" fill="freeze" />
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="-30" to="0" begin="1s" dur="5s" fill="freeze" />
                            <animateTransform attributeName="transform" attributeType="XML" type="scale" from="1" to="3" additive="sum" begin="1s" dur="5s" fill="freeze" />
                        </text>
                    </g>

                </svg>
            </div>
        )
    }
}
