import React from "react";
import "./AppLayout.scss";
import HeaderNav from "../../containers/HeaderNav/HeaderNav";

// we are just returning a div that contains the app layout
export function AppLayout(props) {
  return (
    <div className="app-layout">
      <HeaderNav />
      {props.children}
    </div>
  );
}
