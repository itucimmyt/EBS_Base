import React from 'react';

class DefaultContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      containerName : "defaultContainer"
    }
  }
  render(){
    return(
      <h1>Hello!, I am {this.state.containerName}</h1>
    );
  }
}

export default DefaultContainer;
