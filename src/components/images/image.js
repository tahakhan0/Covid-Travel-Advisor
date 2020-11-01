import React from "react";
import usa from "./US.png";
import india from "./IN.png";
import brazil from "./BR.png";

const styleForImages = {
  height: "40px",
  width: "50px",
  borderRadius: "10%",
};

const US = (
  <img src={usa} style={styleForImages} alt="US-travel-corona-assitant" />
);

const BR = (
  <img src={brazil} style={styleForImages} alt="US-travel-corona-assitant" />
);

const IN = (
  <img src={india} style={styleForImages} alt="US-travel-corona-assitant" />
);

export { US, BR, IN };
