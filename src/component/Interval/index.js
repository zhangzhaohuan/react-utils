import React, { Component } from 'react'

export default class componentName extends Component {


    componentDidMount(){

        this.timer = setInterval(()=>{
            console.log('1');
            setTimeout(()=>{
                console.log('timeout');
            },1000)
        },3000)
    }
    render() {
        return (
            <div>
                interaval

            </div>
        )
    }
}
