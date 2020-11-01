import React from "react";
import Tile from "./Tile";

export default function GroupTiles(props) {
  const { fromCountry, toCountry } = props;
  console.log(fromCountry);

  return (
    <div className="container tilesGroupStyle">
      <div className="row">
        {fromCountry &&
          fromCountry.map((message) => (
            <div key={message.id} className="col-xs-12 col-lg-6 mb-4">
              <Tile data={message} />
            </div>
          ))}
        {toCountry &&
          toCountry.map((message) => (
            <div key={message.id} className="col-xs-12 col-lg-6 mb-4">
              <Tile data={message} />
            </div>
          ))}
      </div>
    </div>
  );
}
