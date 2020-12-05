import React, { useState } from "react";
import MiniTile from "./MiniTile";
import SelectCountry from "./SelectCountry";

export default function Tiles(props) {
  const { messages } = props;

  const [allMessages, setMessages] = useState(messages);

  const handleSelectedCountry = (country) => {
    console.log(country);
    const filteredMessages = [...messages];
    console.log(filteredMessages.filter(filteredMessages.id !== country.id));
    // console.log(filteredMessages);
    // setMessages(filteredMessages)
  };

  return (
    <div className="container tilesGroupStyle">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-12">
                <SelectCountry
                  countries={messages}
                  countrySelected={handleSelectedCountry}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
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
    </div>
  );
}
