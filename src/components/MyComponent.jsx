import React, { useRef } from "react";

function MyComponent() {
  const elementRef = useRef(null);

  function findSiblings() {
    const element = elementRef.current;

    const parent = element.parentNode;
    console.log(parent.children[0]);
    const siblings = [];
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i] !== element) {
        console.log("same");
        siblings.push(parent.children[i]);
      } else {
        // console.log(parent.children[i]);
      }
    }
  }

  return (
    <div>
      <div ref={elementRef}>Element</div>
      <button onClick={findSiblings}>Find Siblings</button>
      <h5>hel</h5>
      <h5>lkjsd</h5>
      <h5></h5>
      <h5></h5>
    </div>
  );
}

export default MyComponent;
