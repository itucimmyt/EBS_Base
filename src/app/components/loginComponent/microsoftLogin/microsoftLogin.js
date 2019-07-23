import React from "react";
import MicrosoftLogin from "react-microsoft-login";

export default props => {

  return (
    <React.Fragment>
        <MicrosoftLogin
          withUserData={true}
          clientId={"e8e266a6-306e-4e32-92aa-20eddb6bc589"}
          authCallback={props.authHandler}
        />
    </React.Fragment>
  )
}
