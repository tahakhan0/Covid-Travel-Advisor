import React, { useState, useEffect } from "react";

export default function Alert({ countries }) {
  const [allCountries, setAllCountries] = useState([]);

  function getAllCountries(countries) {
    let names = [];
    var i;
    for (i = 0; i < countries.length; i++) {
      names.push(countries[i].country.name);
    }
    return names;
  }
  useEffect(() => {
    setAllCountries(getAllCountries(countries));
  }, [countries]);

  return (
    <div className="container-fluid">
      <div
        className="jumbotron jumbotron-fluid shadow-sm"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            We have added the top {allCountries.length} countries with the most
            Covid-19 cases. Be sure to check them out, if it is one of your next
            travelling destinations. I will appreciate if you can support this
            project by clicking on the button below.
          </p>
          <p className="lead">
            <a
              className="btn btn-warning btn-md"
              href="https://www.buymeacoffee.com/tahak"
              role="button"
            >
              Support this project
            </a>
          </p>
          <hr />
          <ul className="list-inline">
            <li className="list-inline-item">Data available for:</li>
            {allCountries.map((country) => (
              <li key={country} className="list-inline-item">
                {country} |
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
