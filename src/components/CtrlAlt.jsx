import React, { useRef, useState } from "react";
import Letter from "./Letter";
const CtrlAlt = ({ letter, text }) => {
  const [value, setValue] = useState(text);
  const inputRef = useRef(null);
  const textInformation = useRef(null);

  const changeText = (event) => {
    if (inputRef.current.value != "") {
      textInformation.current.querySelector(".text___").innerText = value;
    } else {
      console.log("not empty");
      console.log(value);
    }
  };

  return (
    <div className="shortcut_main">
      <div className="ctrl_alt_key">
        <div className="shortKey_container">
          <h3 style={{ display: "flex", flexDirection: "row" }}>
            <span className="key___">Ctr + Alt +</span>
            <Letter letter={letter} className="letter" />
            <span ref={textInformation} className="key_information">
              <b>=</b>
              <b className="text___">{text}</b>
            </span>
          </h3>
        </div>
      </div>
      <div className="letter_information">
        <div className="change_information">
          <Letter letter={letter} className="letter" />
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="save" type="button" onClick={changeText}>
            save it
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtrlAlt;
