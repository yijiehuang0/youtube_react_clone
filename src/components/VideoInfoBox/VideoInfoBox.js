import React, { Component } from "react";
import "./VideoInfoBox.scss";
import { Image, Button } from "semantic-ui-react";

export class VideoInfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      number: 3,
    };
  }

  render() {
    let descriptionParagraphs = [
      <p>Paragraph1</p>,
      <p>Paragraph2</p>,
      <p>Paragraph3</p>,
      <p>Paragraph4</p>,
      <p>Paragraph5</p>,
    ];

    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show More";
    if (!this.state.collapsed) {
      descriptionTextClass = "expanded";
      buttonTitle = "Show Less";
    }
    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">Channel Name</div>
          <div className="video-publication-date">Insert Some Date Here</div>
        </div>
        <Button color="youtube">91.5K Subscribe</Button>
        <div className="video-discription">
          <div className={descriptionTextClass}>{descriptionParagraphs}</div>

          <Button compact onClick={this.onToggleCollapseButtonClick}>
            {buttonTitle}
          </Button>
        </div>
      </div>
    );
  }

  onToggleCollapseButtonClick = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed,
        number: 3 ? 5 : 5,
      };
    });
  };
}

function createParagraphsToBeDisplayed(listOfParagraphs, number) {
  var counter = 0;
  return <React.Fragment>{}</React.Fragment>;
}
