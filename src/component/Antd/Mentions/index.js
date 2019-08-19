import React, { Component } from 'react'

import { Mentions } from 'antd';


export default class MentionsDemo extends Component {

    onChange(value) {
        console.log('Change:', value);
    }

    onSelect(option) {
        console.log('select', option);
    }

    render() {
        return (
            <div>
                antd3.15暂无Mentions组件
            </div>
        )
    }
}
