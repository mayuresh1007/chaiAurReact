import { createContext, useState, useEffect } from "react";

export const UserCOntext = createContext({
    user:{
        name:'mayuresh kumbhar'
    }
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [username, setUserName] = useState("mayuresh1007");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);
  return (
    <UserCOntext.Provider value={{ user }}>{children}</UserCOntext.Provider>
  );
};

UserCOntext.displayName = 'user-context'