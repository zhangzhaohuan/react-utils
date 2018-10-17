import React, { Component } from 'react';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const instance = axios.create({
  timeout: 2000,
});
export default class Home extends Component {
  componentDidMount(){
    instance.get( `/api/auth/user/bind/info/${encodeURIComponent('15764299983@163.com')}`,{
      cancelToken: source.token
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    source.cancel('Operation canceled by the user.');
  }
  render() {
    return (
      <div>
        <p>home</p>
      </div>
    )
  }
}
