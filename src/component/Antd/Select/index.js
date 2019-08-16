import React, { Component } from 'react'
import { Select } from 'antd';
import './index.scss';
const { Option } = Select;

export default class SelectDemo extends Component {


    // dropdownMatchSelectWidth
    render() {
        return (
            <div className='select_demo'>
                <Select dropdownMatchSelectWidth={false} defaultValue="lucy" style={{ width: 120 }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">YimingheYimingheYimingheYimingheYimingheYiminghe</Option>
                </Select>
            </div>
        )
    }
}
