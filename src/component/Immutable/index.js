import React, { Component } from 'react'
import _ from 'lodash';
const { Record, List, Map, is } = require('immutable');



export default class Immutable extends Component {

    constructor() {
        super();
        this.state = {
            name: 'zhangsan'
        }
    }
    componentDidMount() {


        //is
        const a = {
            name: '1'
        };
        const b = {
            name: '2'
        }

        //Map


        //List
        List.isList([]); // false
        List.isList(List()); // true
        console.log(List.isList([1]));
        console.log(List.isList(List()));
        let list1 = List([1,2,3]);


        var ABRecord = Record({ a: 1, b: 2 });
        var myRecord = new ABRecord({ b: 3 });
        console.log(ABRecord);
        console.log(myRecord);

        this.setState({
            name: 'zhangsan'
        })
    }
    render() {
        let list1 = List([1,2,3]);
        return (
            <div>
                <Child name={this.state.name} />
                {list1.map((val,index)=>{
                   return  <li key={index}>{val}</li>
                })}
            </div>
        )
    }
}



class Child extends Component {
    constructor() {
        super();
        this.state = {
            age: '11',
            arr:[1,2]
        }
    }

    componentDidMount() {
        // this.setState({
        //     age: '11'
        // })

        this.setState((state) => {
            console.log(state);
            return {
                age: state.age,
                arr:[1,2]
            }
        })
    }


    shouldComponentUpdate(nextProps, nextState) {
        //props和nextProps不是同一指针
        //state和nextState不是同一指针
        const { props = {}, state = {} } = this;
        console.log(nextState == state);
        console.log(nextState === state);
        console.log(_.isEqual(nextState, state));
        console.log(_.isEqual(nextProps, props));
        // debugger;

        
        
        var aProps = Object.getOwnPropertyNames(this.props);
        var bProps = Object.getOwnPropertyNames(nextProps);
        console.log(aProps, bProps);
        return true
    }
    render() {
        return (
            <div>
                child
            </div>
        )
    }
}
