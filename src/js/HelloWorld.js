//importing react so we can extend our class from the Component object within React
import React from 'react';

//exporting the default HelloWorld class that extends the module React Component object
export default class HelloWorld extends React.Component{
  //rendering function returning our HTML object containing a quote
  render(){
    //returning our greeting
    return( <span>I AM MERELY A GRAIN OF SAND HURTLING THROUGH SPACE SEARCHING FOR SIGNICANCE.</span>)
  }
}
