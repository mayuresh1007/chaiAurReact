import React, { useCallback, useEffect, useRef, useState } from "react";

const PassGen = () => {
  const inputref = useRef(null);
  const [password, setPassword] = useState("");
  const [char, setchar] = useState(false);
  const [number, setnumber] = useState(false);
  const [length, setlength] = useState(8);

  useEffect(() => {
    PassGenerator();
  }, [char, number, length, setPassword]);

  const PassGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [char, number, length, setPassword]);

  function copyvalue() {
    inputref.current?.select();
    inputref.current?.setSelectionRange(0, 16);
    navigator.clipboard.writeText(password);
    console.log(password);
  }

  return (
    <div className=" text-center justify-center container mb-8">
      <h1 className="container text-3xl">Password generator</h1>
      <div className="text-center flex container justify-center">
        {/* //input anc copy button */}

        {/* <label htmlFor="password">Password</label> */}
        <input
          type="text"
          placeholder="password"
          value={password}
          readOnly
          ref={inputref}
        />

        <button className="btn border-t-cyan-400" onClick={() => copyvalue()}>
          Copy
        </button>
      </div>
      <div className="flex container text-center justify-center my-8">
        <label htmlFor="length">Length{length}</label>
        <input
          type="range"
          placeholder="length"
          min={8}
          max={18}
          value={length}
          onChange={(e) => setlength(Number(e.target.value))}
          // onChange={(e) => setLength(Number(e.target.value))}
        />

        <label htmlFor="Numbers">Numbers</label>
        <input
          type="checkbox"
          placeholder="Numbers"
          checked={number}
          readOnly
          onClick={() => {
            setnumber((prev) => !prev);
          }}
        />

        <label htmlFor="Characters">Characters</label>
        <input
          type="checkbox"
          placeholder="Characters"
          checked={char}
          readOnly
          onClick={() => {
            setchar((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default PassGen;
