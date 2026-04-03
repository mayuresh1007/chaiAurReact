import React, { useState } from "react";
import { useGithub } from "./contexts/GitHUbContext";

const GthubForm = () => {
  const [username, setUsername] = useState("");
    const { FetchUser, loader,user } = useGithub();
  const handleSubmit = (e) => {
    e.preventDefault();
    FetchUser(username);
  };

  return (
    <div>
      <>
        {/* <form onSubmit={handleSubmit(username)}>
          <label htmlFor="username">User name</label>
          <br />
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">submit</button>
        </form> */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">{loader ? "Loading..." : "Search"}</button>
        </form>
      </>
      <pre className="tsxt-3xl">{username}</pre>
    </div>
  );
};

export default GthubForm;
