import React, { useState, useEffect } from "react";
import * as images from "./images/image.js";

export default function MiniTile(props) {
  const { data } = props;
  const {
    country,
    api,
    confirmed,
    deaths,
    recovered,
    content,
    test_required,
    get_last_updated_date,
    restricted_countries,
  } = data;

  const [details, setDetails] = useState(false);
  const messages = content[0];
  const travel_for_citizens_residents = content[1];
  const quarantine_status = content[2];
  const messagesArray = messages.split("+");

  const seeMoreDetails = () => {
    setDetails(!details);
  };
  useEffect(() => {}, [details]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="card miniTileCardStyle shadow-sm bg-white rounded">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-5 d-flex justify-content-center">
            <div className="card-title tileTitleStyle">
              {images[country.country_code]}
              <span className="ml-2">{country.name}</span>
            </div>
          </div>
          <div className="col-12 col-sm-7">
            <div className="row d-block d-sm-flex justify-content-end">
              <div className="col-8 col-xs-6 col-sm-8 col-md-6 col-xl-4">
                <div className="col dataTitle">
                  <i className="fa fa-line-chart mr-1" aria-hidden="true"></i>
                  Total cases
                </div>
                <div className="col-12 justify-content-center dataNumbersText">
                  {numberWithCommas(confirmed)}
                </div>
              </div>
              <div className="col-8 col-xs-6 col-sm-8 col-md-6 col-xl-4">
                <div className="col dataTitle">
                  <i className="fa fa-heart mr-1" aria-hidden="true"></i>
                  Recovered
                </div>
                <div className="col-12 justify-content-center dataNumbersText">
                  {numberWithCommas(recovered)}
                </div>
              </div>
              <div className="col-8 col-xs-6  col-sm-8  col-md-6  col-xl-4">
                <div className="col dataTitle">
                  <i className="fa fa-info-circle mr-1" aria-hidden="true"></i>
                  Deaths
                </div>
                <div className="col-12 dataNumbersText">
                  {numberWithCommas(deaths)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <i
              className="fa fa-plane mr-1"
              aria-hidden="true"
              //   style={{ color: "#0E4AF6" }}
            ></i>
            Travel: {travel_for_citizens_residents}
          </div>
          <div className="col-12 pt-1">
            <i
              className="fa fa-file-text-o mr-1"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            Covid Test:{" "}
            {test_required === "N/A"
              ? "Subjective to your country's latest guidelines"
              : test_required}
          </div>
          <div className="col-12 pt-1">
            <i className="fa fa-building mr-1" aria-hidden="true"></i>
            Quarantine: {quarantine_status}
          </div>
          <div className="col-12 pt-1">
            {details && (
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  paddingTop: "4px",
                }}
              >
                {messages === "No messages" ? null : (
                  <li>
                    <strong>Travel Restrictions: </strong>
                    {messagesArray.length > 1 ? (
                      <ul>
                        {messagesArray.map((mArray) => (
                          <li className="textLI" key={mArray}>
                            {mArray}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      messages
                    )}
                  </li>
                )}
                {messages === "No messages" &&
                restricted_countries.length !== 0 ? (
                  <li>
                    <strong>Restricted Countries:</strong>
                  </li>
                ) : null}
                <ul className="list-inline mt-1 mb-2">
                  {restricted_countries.map((c) => (
                    <li className="list-inline-item" key={c}>
                      <span style={{ fontSize: "14px" }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </ul>
            )}
          </div>
          <div className="col-12 d-md-flex justify-content-end">
            <small className="text-secondary">
              Last updated: {get_last_updated_date}
            </small>
          </div>

          <div className="col-12">
            <hr />
            <div className="row">
              <div className="col-8">
                <small className="text-secondary">
                  {api ? (
                    <ul className="list-inline">
                      <span className="mr-1">Sources:</span>
                      {api.map((a) => (
                        <li key={a.name} className="list-inline-item">
                          <a className="text-secondary" href={a.url}>
                            {a.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </small>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => seeMoreDetails()}
                >
                  {!details
                    ? `See ${messagesArray.length} Travel restrictions`
                    : "Minimize"}
                </button>
              </div>
            </div>
          </div>

          {/* {details && (
        <div className="row">
          <ul>
            <li>
              <strong>Quarantine:</strong> {quarantine_status}
            </li>
            {messages === "No messages" ? null : (
              <li>
                <strong>Travel Restrictions: </strong>
                {messagesArray.length > 1 ? (
                  <ul>
                    {messagesArray.map((mArray) => (
                      <li className="textLI" key={mArray}>
                        {mArray}
                      </li>
                    ))}
                  </ul>
                ) : (
                  messages
                )}
              </li>
            )}
            {messages === "No messages" && restricted_countries.length !== 0 ? (
              <li>
                <strong>Restricted Countries:</strong>
              </li>
            ) : null}
            <ul className="list-inline mt-1 mb-2">
              {restricted_countries.map((c) => (
                <li className="list-inline-item" key={c}>
                  <span style={{ fontSize: "14px" }}>{c}</span>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      )} */}

          {/* <div className="col-12 d-flex justify-content-end">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => seeMoreDetails()}
          >
            {!details ? "See more details" : "Minimize"}
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
