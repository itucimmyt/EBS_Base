import React from "react";
import { useAuth0 } from "./react-auth0-wrapper";

//import assets
import auth0Logo from "../../../../../../assets/images/auth0-logo-darkbg.png"

const styles = {
  loginDiv: {
    border: "solid 1px black",
    padding: "0px",
    height: "35px",
    width: "212px",
    float: "right",
    cursor: "pointer",
    paddingTop: "7px"
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px'
  }
}

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={styles.center}>
      <div onClick={() =>
        loginWithRedirect({})
      } style={styles.loginDiv}>
        {!isAuthenticated && (
          <input
            height="30px"
            type="image"
            src={auth0Logo}
          >
          </input>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
    </div>
  );
};

export default NavBar;
