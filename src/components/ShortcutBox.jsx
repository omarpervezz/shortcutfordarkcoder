import React from "react";
import Body from "./Body";
import Header from "./Header";
import NavBr from "./NavBr";
const ShortcutBox = () => {
  return (
    <div className="shortcut_box">
      <div className="container_header_nav">
        <Header />
        <NavBr />
      </div>
      <Body />
    </div>
  );
};

export default ShortcutBox;
