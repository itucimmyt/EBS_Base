import React from "react";

//import container components
import AppBarComponent from "./components/AppBarComponent";
import DrawerComponent from "./components/DrawerComponent";
import MenuListComponent from "./components/MenuListComponent";
import Catalog001Component from "./components/Catalog001Component";
import Catalog002Component from "./components/Catalog002Component";

class DashBoardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "catalog001"
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({
      tab: newTab
    });
  }

  render() {

    let content = null;

    switch (this.state.tab) {
      case "catalog001":
        content = <Catalog001Component/>
        break;
      case "catalog002":
        content = <Catalog002Component />
        break;
      default:
        content = null;
        break;
    }

    return (
      <React.Fragment>
        {
          <AppBarComponent
            drawerComponent={<DrawerComponent
              menuListComponent={<MenuListComponent
                changeTab={this.changeTab}
              />
              } />}
          />
        }
        {content}
      </React.Fragment>
    );
  }
}

export default DashBoardContainer;
