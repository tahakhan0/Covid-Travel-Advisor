import React from "react";
// import { US, BR, IN } from "./images/image.js";
import * as images from "./images/image.js";

export default function Tile(props) {
  const { data, countryRef } = props;
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

  const messages = content[0];
  const travel_for_citizens_residents = content[1];
  const quarantine_status = content[2];
  const messagesArray = messages.split("+");
  return (
    <div
      className="card tileCardStyle shadow-sm bg-white rounded"
      ref={countryRef}
    >
      <div className="card-body">
        <div className="card-title tileTitleStyle">
          <div className="row align-items-center">
            {/* <div className="col col-sm-4">{images[country.country_code]}</div>
            <div className="col col-sm-8 mt-4">{country.name}</div> */}

            <div className="col d-sm-flex justify-content-end">
              {images[country.country_code]}
            </div>
            <div className="col d-sm-flex justify-content-start">
              {country.name}
            </div>
          </div>
        </div>
        <hr />
        <div className="container tileBodyStyle">
          <div className="row">
            <div className="col-12 col-md-4 col-sm-12 p-2">
              <i
                className="fa fa-line-chart mr-1"
                aria-hidden="true"
                //   style={{ color: "#FF1414 " }}
              ></i>
              Total cases: {confirmed}
            </div>
            <div className="col-12 col-md-4 col-sm-12 p-2 d-lg-flex justify-content-center">
              <i
                className="fa fa-heart mr-1 mt-lg-1"
                aria-hidden="true"
                //   style={{ color: "green " }}
              ></i>
              Recovered: {recovered}
            </div>
            <div className="col-12 col-md-4 col-sm-12 p-2 d-lg-flex justify-content-center">
              <i
                className="fa fa-info-circle mr-1 mt-lg-1"
                aria-hidden="true"
                //   style={{ color: "red" }}
              ></i>
              Deaths: {deaths}
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-2">
              <i
                className="fa fa-plane mr-1"
                aria-hidden="true"
                //   style={{ color: "#0E4AF6" }}
              ></i>
              Travel: {travel_for_citizens_residents}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-10 p-2">
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
          </div>
          <div className="row justify-content-end">
            <small className="text-secondary">
              Last updated: {get_last_updated_date}
            </small>
          </div>
          <hr />
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
          </div>
          <hr />
          <div className="row">
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
        </div>
      </div>
    </div>
  );
}
