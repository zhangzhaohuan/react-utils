import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Table from './Table/index';
import Menu from './Menu/index';

export default class Antd extends Component {

    render() {
        console.log('render');
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/antd/table'>/antd-table</Link>
                    </li>
                    <li>
                        <Link to='/antd/menu'>/antd-menu</Link>
                    </li>
                    <li></li>
                </ul>

                <div>
                    <Switch>
                        <Route path='/antd/table' component={Table} />
                        <Route path='/antd/menu' component={Menu} />
                    </Switch>
                </div>
            </div>
        )
    }
}
