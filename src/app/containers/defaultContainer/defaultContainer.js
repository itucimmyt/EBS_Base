import React from 'react';

//import clients
import _myClient from "../../../clients/clientDefault/clientDefault";

//import default components
import LoadingComponent from "../../components/LoadingComponent";

//import components
import TableComponent from "./components/DefaultTableComponent";

//create client objects
const myClient = new _myClient();

class DefaultContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      containerName : "defaultContainer",
      data : undefined
    }
  }

  componentDidMount(){
    myClient.getData(res => {
      this.setState({
        data : res
      });
    });
  }

  render(){

    let myData = this.state.data === undefined ?
    (<LoadingComponent/>)
    :
    (<TableComponent
      data = {this.state.data}
    />)

    return(
      <React.Fragment>
        <h1>Hey!, I am {this.state.containerName}</h1>
        <div>
          {myData}
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultContainer;
