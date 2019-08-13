import React, { Component } from 'react'
import './index.scss';

export default class componentName extends Component {


    add=()=>{
        console.log('add');
        
    }

    sub = ()=>{
        console.log('sub');

    }

    componentDidMount(){
        document.getElementsByClassName('graph-controller')[0];
        console.log(document.getElementsByClassName('graph-controller')[0]);
        
    }

    render() {
        return (
            <div className='graph-controller'>
                <div className='graph-bars'>
                    <div onClick={this.add}>+</div>
                    <div onClick={this.sub}>-</div>
                    <div>reset</div>
                </div>
                <div className='panzoom-controller'>
                    
                
                
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}
