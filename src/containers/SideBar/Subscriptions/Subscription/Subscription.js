import React from "react";
import { Icon, Menu, Image } from "semantic-ui-react";
import "./Subscription.scss";

//Props ares:
// broadcasting: boolean -> signal that tells us where to put this new thing
// amountNewVideos->number -> span of count of new videos  to ouptut
// lable->spring -> outputed with the span and the image in a div

export function Subscription(props) {
  let rightElement = null;
  const { broadcasting, amountNewVideos } = props;
  if (broadcasting) {
    rightElement = <Icon name="signal" />;
  } else if (amountNewVideos) {
    rightElement = <span className="new-videos-count">{amountNewVideos}</span>;
  }

  return (
    <Menu.Item>
      <div className="subscription">
        <div>
          <Image src="http://via.placeholder.com/28x28" avatar />
          <span>{props.label}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}

/*
    Menu.item that contains this: 
    Div that contians the subscription
        Div that contains the space holder and the label
        Either
            Span that contains the video count
        Or
            Signal that contains everything
*/
