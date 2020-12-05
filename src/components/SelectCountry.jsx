import React from "react";

export default function SelectCountry({ countries, countrySelected }) {
  console.log(countries);
  return (
    <ul className="nav justify-content-center SelectCountryStyle">
      <li className="nav-item">
        <a className="btn btn-outline-primary" role="button">
          Display All
        </a>
      </li>
      {countries.map((c) => (
        <li key={c.id} className="nav-item">
          <a className="nav-link" onClick={() => countrySelected(c.id)}>
            {c.country.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
