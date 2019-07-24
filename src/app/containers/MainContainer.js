/*This is MainContainer container, in this file, components and containers or "tabs"
should be imported for their usage and display*/

import React from 'react';

//import containers
import LandingPageContainer from "./landingPageContainer/LandingPageContainer";
import DashboardContainer from "./dashBoardContainer/DashboardContainer";
import DefaultContainer from "./defaultContainer/defaultContainer";

class Master extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "landing",
      componentName: "masterContainer"
    }
    this.changeTab = this.changeTab.bind(this);
  }

  //this method is invoked whenever a tab change is required
  changeTab(newTab) {
    this.setState({
      tab: newTab
    });
  }

  componentDidMount() {
  }

  render() {

    //this variable holds the content to be rendered
    let content = null;

    /*this switch acts as a router, import containers, include a case,
    choose a tab name for your container and invoke it.
    pass changeTab = {this.changeTab} as a property if you want to use
    the change tab funcionality inside your container*/
    switch (this.state.tab) {
      case "landing":
        content = <LandingPageContainer
          changeTab={this.changeTab}
        />
        break;
      case "dashboard":
        content = <DashboardContainer />
        break;
      case "default":
        content = <DefaultContainer />
        break;
      default:
        content = null;
        break;
    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}

export default Master;
