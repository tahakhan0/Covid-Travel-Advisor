import React from "react";

export default function Search() {
  return (
    <div className="searchBarStyle">
      <div className="container">
        <div className="row justify-content-center">
          <form className="form-inline d-flex justify-content-center rounded">
            <div className="form-group col-xs-4">
              {/* <div className="col col-md-4"> */}
              <input
                className="form-control SearchBarInput mb-2 mr-md-4"
                type="search"
                placeholder="From"
                aria-label="Search"
              />
            </div>
            <div className="form-group col-xs-4">
              <input
                className="form-control SearchBarInput mb-2 text-dark"
                type="search"
                placeholder="To"
                aria-label="Search"
              />
            </div>
            <div className="col-6 col-md-8 justify-content-center">
              <button
                className="btn btn-primary mt-md-0 ml-md-4 btn-block"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
