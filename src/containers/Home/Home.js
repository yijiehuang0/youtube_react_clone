import React from "react";
import "./Home.scss";
import { SideBar } from "../SideBar/SideBar";
import { HomeContent } from "./HomeContent/HomeContent";

// Home is a container because it could contain stateful representations for isntance
// The different types of videogrids
export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <HomeContent />
      </React.Fragment>
    );
  }
}
