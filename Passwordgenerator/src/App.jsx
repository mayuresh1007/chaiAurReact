import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [numbers, setnumbers] = useState(false);

  const Inputref = useRef(null);
  function passgen() {
    console.log("generate password function");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (char) str += "@!$^%&`+-";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }

  const PassGen = useCallback(passgen, [length, numbers, char, setPassword]);


  useEffect(() => {
    PassGen();
  }, [length, numbers, char, PassGen]);

  const copyText = useCallback(() => {
    Inputref.current?.select()
    Inputref.current?.setSelectionRange(0,length)
    navigator.clipboard.writeText(password);
    // alert("Copied!   " + password.toString());
  },[password]);


  return (
    <div className="text-center justify-center container">
      <h1 className="text-3xl text-center justify-center">
        Password Generator
      </h1>

      <div className="flex justify-center my-5">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          className="border border-3"
          ref={Inputref}
        />
        <button
          disabled={password.length <= 1}
          onClick={() => copyText(password)}
        >
          Copy
        </button>
      </div>
      <div className="flex justify-center my-8">
        <label htmlFor="length mb-3">Length</label>
        <input
          type="range"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min={6}
          max={15}
          className="cursor-pointer  mb-3"
        />
        <p className="font-bold  mb-3 mx-3"> {length}</p>

        <label htmlFor="Check mb-3">Character</label>
        <input
          className=" mb-3 mx-3"
          type="checkbox"
          name="charatcer"
          value={char}
          checked={char}
          onChange={() => setChar((prev) => !prev)}
        />
        <label htmlFor="Check mb-3">Numbers</label>
        <input
          className=" mb-3 mx-3"
          type="checkbox"
          name="numbers"
          value={numbers}
          checked={numbers}
          id=""
          onChange={() => setnumbers((prev) => !prev)}
        />
        {/* <button onClick={() => PassGen()}>gen</button> */}
      </div>
    </div>
  );
}

export default App;
