import React, { Component } from "react";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";
import { SideBarItem } from "./SideBarItem/SideBarItem";
import { SideBarHeader } from "./SideBarHeader/SideBarHeader";
import { SideBarFooter } from "./SideBarFooter/SideBarFooter";
import { Subscriptions } from "./Subscriptions/Subscriptions";

// Stateful Representation
// States include: what they subscribe to thus, it is a container
export class SideBar extends Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem highlight={true} label="Home" icon="home" />
        <SideBarItem label="Trending" icon="fire" />
        <SideBarItem label="Followers" icon="spy" />
        <Divider />
        <SideBarHeader title="Library" />
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch Later" icon="clock" />
        <SideBarItem label="Liked Videos" icon="thumbs up" />
        <Divider />
        <Subscriptions />
        <SideBarHeader title="More from Youtube" />
        <SideBarItem label="Movies and Shows" icon="film" />
        <Divider />
        <SideBarItem label="Report History" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="SendFeedback" icon="comment" />
        <Divider />
        <SideBarFooter />
      </Menu>
    );
  }
}
