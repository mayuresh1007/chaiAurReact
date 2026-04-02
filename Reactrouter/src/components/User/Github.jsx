import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";

const Github = () => {
  //   const [data, setData] = useState("");

  // const{followers} =useParams()

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mayuresh1007")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex justify-evenly">
      <h1 className="text-center text-3xl ">
        Github Followers of {data?.name} :{data?.followers}
      </h1>
      <img src={data?.avatar_url} alt="prtfolio image" />
    </div>
  );
};

export default Github;

export const GitHUbDatafetch = async () => {
  const res = await fetch("https://api.github.com/users/mayuresh1007");
  return await res.json();
};
