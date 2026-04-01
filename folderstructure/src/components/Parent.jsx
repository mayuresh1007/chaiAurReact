import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {
  const [prop, setProp] = useState("any");

  return (
    <div>
        <h1>from parent</h1>
      {prop}
      <Child data={prop} change={setProp}/>
      {/* console.log(prop) */}
    </div>
  );
};

export default Parent;
