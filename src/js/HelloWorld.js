import React from 'react';


export default class HelloWorld extends React.Component{
  constructor(){
    super();
    this.state = {
      title : "React Love"
    }
  }
  render(){
    return(
      <h1>I am merely a grain of sand hurtling through space with only self-preceived meaning.</h1>
    );
  }
}
