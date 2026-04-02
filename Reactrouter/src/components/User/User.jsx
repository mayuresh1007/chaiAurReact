import React from "react";
import { useParams } from "react-router";

function User() {
  const {id} = useParams(); // make sure its desrtuctured

  console.log(id);
  return (
    <div>
        <h1 className="text-2xl">User with ID {id}</h1>
    </div>
  );
}

export default User;
