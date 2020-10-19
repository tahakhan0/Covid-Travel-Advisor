import React from "react";

export default function Tile(props) {
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
  } = data;
  return (
    <div className="card tileCardStyle shadow-sm bg-white rounded">
      <div className="card-body">
        <div className="card-title tileTitleStyle">{country.name}</div>
        <div className="container tileBodyStyle">
          <div className="row">
            <div className="col p-2">
              <i
                className="fa fa-line-chart mr-1"
                aria-hidden="true"
                //   style={{ color: "#FF1414 " }}
              ></i>
              Total cases:{confirmed}
            </div>
            <div className="col p-2">
              <i
                className="fa fa-heart mr-1"
                aria-hidden="true"
                //   style={{ color: "green " }}
              ></i>
              Recovered:{recovered}
            </div>
          </div>
          <div className="row">
            <div className="col p-2">
              <i
                className="fa fa-info-circle mr-1"
                aria-hidden="true"
                //   style={{ color: "red" }}
              ></i>
              Deaths: {deaths}
            </div>
            <div className="col p-2">
              <i
                className="fa fa-plane mr-1"
                aria-hidden="true"
                //   style={{ color: "#0E4AF6" }}
              ></i>
              Travel: Yes
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-6 p-2">
              <i
                className="fa fa-file-text-o mr-1"
                aria-hidden="true"
                //   style={{ color: "#0E4AF6" }}
              ></i>
              Covid Test: {test_required}
            </div>
          </div>
          <div className="row justify-content-end">
            <small className="text-secondary">
              Last updated: {get_last_updated_date}
            </small>
          </div>
          <hr />
          <div className="row">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus amet nobis unde iusto id dolorum odio, deserunt quam
              totam, voluptatibus atque voluptate corrupti adipisci modi,
              repudiandae vero! Vel, nesciunt recusandae?Sit aperiam, quam ut
              iure odit aliquam totam aliquid aut cum non. Amet dolor illo earum
              deserunt placeat error ipsam commodi, itaque cumque molestias
              culpa unde ullam doloribus ut porro?
            </p>
          </div>
          <hr />
          <div className="row">
            <small className="text-secondary">
              <span className="mr-1">Sources:</span>
              {api.map((a) => (
                <span key={a}>{a},</span>
              ))}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
