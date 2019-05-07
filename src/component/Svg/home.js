import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/svg/animate'>animate</Link>
                    </li>
                    <li>
                        <Link to='/svg/gradient'>gradient</Link>
                    </li>
                    <li>
                        <Link to='/svg/set'>set</Link>
                    </li>
                    <li>
                        <Link to='/svg/text'>text</Link>
                    </li>
                    <li>
                        <Link to='/svg/transform'>transform属性</Link>
                    </li>
                    <li>
                        <Link to='/svg/event'>svg事件</Link>
                    </li>

                </ul>

            </div>
        )
    }
}

