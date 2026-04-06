import React, { useContext } from "react";
import { UserCOntext } from "./contexts/UserContact";

const User = () => {
  const { user } = useContext(UserCOntext);
  return (
    <div>
      <hr />
      <p>
        this is came from initial state declared in useContext function bex this
        component is out of context provider  provider is overide if this component are inside provider
      </p>
      {user.name}

      <hr />
    </div>
  );
};

export default User;
