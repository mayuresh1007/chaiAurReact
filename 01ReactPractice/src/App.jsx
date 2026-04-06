import Upliftexample from "./Upliftexample";
import User from "./User";
import { UserCOntext, UserProvider } from "./contexts/UserContact";
import { useContext, Provider, useState, useEffect } from "react";

function App() {
  // const [user, setUser] = useState({});
  // const [username, setUserName] = useState("mayuresh1007");

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((res) => res.json())
  //     .then((res) => setUser(res));
  // }, []);
  return (
    <>
      {/* for this component user is came from initical state declased in userCOntext */}
      <User />
      <UserProvider>
        {/* <UserCOntext.Provider value={{ user }}> */}
        {/* for this component user is came from fetched user coz it inside the provider */}
        <Upliftexample />
        {/* </UserCOntext.Provider> */}
      </UserProvider>
    </>
  );
}

export default App;
