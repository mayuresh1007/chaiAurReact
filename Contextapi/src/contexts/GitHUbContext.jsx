import { createContext, useContext, useState } from "react";


//create context 
export const GithubContext = createContext();

//provider

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const FetchUser = async (username) => {
    try {
      setLoader(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
//   FetchUser();
  
  return (
    <GithubContext.Provider value={{ user, loader, FetchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

//hook for it
export const useGithub = () => {
  return useContext(GithubContext);
};

