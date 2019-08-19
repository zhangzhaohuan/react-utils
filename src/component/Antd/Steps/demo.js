import React, { Component } from 'react'

export default class Demo extends Component {
    componentDidMount(){
        console.log('did');
    }

    componentWillReceiveProps(nextprops,state){
        console.log(nextprops.data);
    }
    

    render() {
        console.log('render');
        
        return (
            <div>
                {this.props.data.length}
            </div>
        )
    }
}
