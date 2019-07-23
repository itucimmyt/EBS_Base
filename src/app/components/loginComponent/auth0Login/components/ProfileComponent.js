// src/components/Profile.js

import React from "react";
import { useAuth0 } from "./react-auth0-wrapper";

const Profile = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      null
    );
  }
  
  else{
    props.authHandler(user);
    return (
      null
    );
  }
};

export default Profile;
