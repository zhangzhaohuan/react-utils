import React, { Component } from 'react'
import { Steps, Icon } from 'antd';
import Demo from './demo';
const { Step } = Steps;
export default class StepsDemo extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            data:[{'name':'name1'},{'name':'name2'}]
        }
    }
    componentDidMount() {
        const self = this;
        setTimeout(()=>{
            self.setState({
                show:true
            })
        },2000);
        setTimeout(()=>{
            self.setState({
                data:[{'name':'name1'},{'name':'name22'}]
            })
        },4000);
     }
    render() {
        return (
            <div>
                {/* <Steps current={0}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>, */}


                <Steps current={0}>
                    <Step status="finish" title="Login" icon={<Icon type="user" />} />
                    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
                {
                    this.state.show && <Demo data = {this.state.data} />
                }
            </div>
        )
    }
}
