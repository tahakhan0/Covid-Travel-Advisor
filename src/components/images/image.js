import React from "react";
import usa from "./US.png";
import india from "./IN.png";
import brazil from "./BR.png";
import france from "./FR.png";
import russia from "./RU.png";
import argentina from "./AR.png";
import spain from "./ES.png";

const styleForImages = {
  height: "40px",
  width: "50px",
  borderRadius: "10%",
};

const US = (
  <img src={usa} style={styleForImages} alt="US-travel-corona-assitant" />
);

const BR = (
  <img src={brazil} style={styleForImages} alt="BR-travel-corona-assitant" />
);

const IN = (
  <img src={india} style={styleForImages} alt="IN-travel-corona-assitant" />
);

const FR = (
  <img src={france} style={styleForImages} alt="FR-travel-corona-assitant" />
);

const RU = (
  <img src={russia} style={styleForImages} alt="RU-travel-corona-assitant" />
);
const ES = (
  <img src={spain} style={styleForImages} alt="ES-travel-corona-assitant" />
);
const AR = (
  <img src={argentina} style={styleForImages} alt="AR-travel-corona-assitant" />
);

export { US, BR, IN, FR, RU, ES, AR };
