import React, { Component } from 'react'
import { Table, Button } from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];







export default class TableDemo extends Component {

    constructor() {
        super();
        this.state = {
            selectedRowKeys: []
        }
    }

    //返选
    invert = () => {
        const { selectedRowKeys } = this.state;
        const set = new Set(selectedRowKeys);
        let invertDataKeys = [];
        data.forEach((item) => {
            if (!set.has(item.key) && item.name !== 'Disabled User') {
                invertDataKeys.push(item.key)
            }
        })
        this.setState({
            selectedRowKeys: invertDataKeys
        })
    }

    //重置
    reset = () => {
        this.setState({
            selectedRowKeys: []
        })
    }

    render() {
        const { selectedRowKeys = [] } = this.state;
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectedRowKeys
                })
            },
            getCheckboxProps: record => {
                const disabled = record.name === 'Disabled User';
                console.log(record);
                return ({
                    disabled: disabled, // Column configuration not to be checked
                    name: record.name,
                })
            },
            selectedRowKeys: selectedRowKeys
        };

        return (
            <div>
                <Button type="primary" onClick={this.invert}  >
                    返选
                </Button>
                <Button type="primary" onClick={this.reset}>
                    重置
                </Button>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
    }
}
