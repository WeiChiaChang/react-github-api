import React from "react";
import ReactDOM from "react-dom";

import UserInfo from "./components/UserInfo";

const view = (
  <div>
    <UserInfo></UserInfo>
  </div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(view, mountNode);