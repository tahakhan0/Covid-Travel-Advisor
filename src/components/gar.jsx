
  (
    <div className="card miniTileCardStyle shadow-sm bg-white rounded">
      <div className="card-body">
        <div className="card-title tileTitleStyle">
          <div className="row align-items-center">
            <div className="col d-sm-flex justify-content-end">
              {images[country.country_code]}
            </div>
            <div className="col d-sm-flex justify-content-start">
              {country.name}
            </div>
          </div>
        </div>
        <hr />
        <div className="container miniTileBodyStyle">
          <div className="miniTileCardBody">
            <div className="row">
              <div className="col-12 p-2">
                <i
                  className="fa fa-line-chart mr-1"
                  aria-hidden="true"
                  //   style={{ color: "#FF1414 " }}
                ></i>
                Total cases: {confirmed}
              </div>
              <div className="col-12 p-2">
                <i
                  className="fa fa-heart mr-1 mt-lg-1"
                  aria-hidden="true"
                  //   style={{ color: "green " }}
                ></i>
                Recovered: {recovered}
              </div>
              <div className="col-12 p-2">
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
              <div className="col-12 p-2">
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
          </div>
          <div className="row d-md-flex justify-content-end">
            <small className="text-secondary">
              Last updated: {get_last_updated_date}
            </small>
          </div>
          <hr />
          {details && (
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
          )}
          <div className="row">
            <div className="col-12" style={{ height: "40px" }}>
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
            <div className="col-12 d-flex justify-content-end">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => seeMoreDetails()}
              >
                {!details ? "See more details" : "Minimize"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 