import React, { Component } from 'react'
import lottie from 'lottie-web';
import { Link } from 'react-router-dom'


export default class LottieWeb extends Component {

    componentDidMount() {
        lottie.loadAnimation({
            container: this.refJson, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json' // the path to the animation json
        });
    }
    render() {
        return (
            <div>
                <div
                    style={{ width: '100px', height: '200px' }}
                    ref={(element) => { this.refJson = element }}>
                </div>
                <div>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                </div>
            </div>

        )
    }
}
