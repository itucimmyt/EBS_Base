import React from "react";

import { Auth0Provider } from "./components/react-auth0-wrapper";
import config from "./config/auth_config.json";
import NavBar from "./components/ButtonComponent";
import Profile from "./components/ProfileComponent";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export default props => {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <React.Fragment>
        <NavBar/>
        <Profile
          authHandler = {props.authHandler} 
          title = {props.title}
        />
      </React.Fragment>
    </Auth0Provider>
  )
}
