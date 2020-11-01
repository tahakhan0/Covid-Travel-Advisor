import React from "react";
import MiniTile from "./MiniTile";

export default function Tiles(props) {
  const { messages } = props;
  return (
    <div className="container tilesGroupStyle">
      <div className="row">
        {messages
          ? messages.map((message) => (
              <div
                key={message.id}
                className="container col-12 col-md-12 col-lg-10 mb-2"
              >
                <MiniTile data={message} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
