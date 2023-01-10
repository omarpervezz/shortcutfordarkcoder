import React, { useEffect, useRef, useState } from "react";
const Letter = ({ letter, className }) => {
  const elementRef = useRef(null);

  const [state, setState] = useState("");

  useEffect(() => {
    if (
      elementRef
        ? elementRef.current.nextSibling.localName == "input"
        : "nothing"
    ) {
      setState("white");
    }
  }, [elementRef]);

  return (
    <span ref={elementRef} className={`${state ? state : className}`}>
      {letter}
    </span>
  );
};

export default Letter;
