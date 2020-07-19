import { VideoGrid } from "../../../components/VideoGrid/VideoGrid";
import React from "react";
import "./HomeContent.scss";

export class HomeContent extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="responsive-video-grid-container">
          <VideoGrid title="Trending" />
          <VideoGrid title="Auto and Vehicles" hideDivider={true} />
        </div>
      </div>
    );
  }
}
