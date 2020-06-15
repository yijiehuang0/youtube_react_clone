import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";

export function Rating(props) {
  let progress = null;
  if (props.likeCount && props.dislikeCount) {
    const percentage =
      100 * (props.likeCount / (props.dislikeCount + props.likeCount));
    progress = (
      <Progress className="progress" percent={percentage} size="tiny" />
    );
  }
  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up" />
        <span>{props.likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs outline down" />
        <span>{props.dislikeCount}</span>
      </div>
    </div>
  );
}
