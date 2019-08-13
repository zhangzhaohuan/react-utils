import Event from './event.js';
import React, { Component } from 'react'

export default class EventDemo extends Component {

    componentDidMount(){
        let demo = new Event();
        console.log(demo);
        demo.on('add',function(arg1,arg2){
            console.log(arg1,arg2);
        });
        demo.fire('add',1,2)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
