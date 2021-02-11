//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import { render } from "react-dom";

render(
  <div>
    <h1>JSX</h1>
    <ul>
      <li>Hello</li>
      <li>world</li>
      <li>code</li>
    </ul>
  </div>,
  document.getElementById("root")
);
