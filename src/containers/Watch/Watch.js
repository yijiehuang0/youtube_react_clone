import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { Video } from "../../components/Video/Video";
export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <div className="watch-grid">
          <Video className="video" id="-7fuHEEmEjs" />
          <div
            className="metadata"
            style={{ width: "100%", height: "100px", background: "#F91112" }}
          >
            Metadata
          </div>
          <div
            className="video-info-box"
            style={{ width: "100%", height: "100px", background: "#BD10E0" }}
          >
            Video Info box
          </div>
          <div
            className="comments"
            style={{ width: "100%", height: "100px", background: "#9013FE" }}
          >
            comments
          </div>
          <RelatedVideos className="relatedVideos" />
        </div>
      </div>
    );
  }
}
export default Watch;
