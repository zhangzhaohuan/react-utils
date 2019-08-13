import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import SvgHome from './home';
import SvgJs from './svgjs';
import SvgResizeJs from './svgresize';
import SvgAnimate from './animate';
import Gradient from './gradient';
import SvgEvent from './event';
import SvgSet from './set';
import SvgText from './text';
import SvgTransform from './transform';//svg transform与css transform区别


export default class componentName extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/svg' exact component={SvgHome} />
                    <Route path='/svg/svgjs' exact component={SvgJs} />
                    <Route path='/svg/svg.resize.js' exact component={SvgResizeJs} />
                    <Route path='/svg/animate' exact component={SvgAnimate} />
                    <Route path='/svg/gradient' exact component={Gradient} />
                    <Route path='/svg/event' exact component={SvgEvent} />
                    <Route path='/svg/set' exact component={SvgSet} />
                    <Route path='/svg/text' exact component={SvgText} />
                    <Route path='/svg/transform' exact component={SvgTransform} />
                </Switch>
            </div>
        )
    }
}
