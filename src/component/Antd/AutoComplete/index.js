import React, { Component } from 'react'
import { AutoComplete, Input } from 'antd';

const { TextArea } = Input;
export default class AutoCompleteDemo extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        }
    }

    handleSearch = value => {
        console.log('value:' + value);
        this.setState({
            dataSource: !value ? [] : [value, value + value, value + value + value],
        });

    };

    handleKeyPress = ev => {
        console.log('handleKeyPress', ev);
    };


    onSelect = (opt) => {
        console.log(opt)
    }


    render() {
        const { dataSource } = this.state;

        return (
            <div>
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                >
                    <TextArea
                        placeholder="input here"
                        className="custom"
                        style={{ height: 50 }}
                        onKeyPress={this.handleKeyPress}
                    />
                </AutoComplete>
            </div>
        )
    }
}
