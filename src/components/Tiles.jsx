import React from "react";
import Tile from "./Tile";

export default function Tiles(props) {
  const { messages } = props;

  return (
    <div className="container tilesGroupStyle">
      <div className="row">
        {messages &&
          messages.map((message) => (
            <div key={message.id} className="col col-sm-12 col-md-6 mb-4">
              <Tile data={message} />
            </div>
          ))}
      </div>
    </div>
  );
}
