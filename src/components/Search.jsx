import React from "react";

export default function Search(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit is called from searchbar");
  };
  const { handleInputChange } = props;

  return (
    <div className="searchBarStyle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9 pt-3 mb-0 searchBarRound">
            <form
              className="form-md-inline d-md-flex justify-content-centerrounded"
              onSubmit={handleSubmit}
            >
              <div className="col col-md-4 form-group col-xs-4 mr-md-2">
                <input
                  className="form-control SearchBarInput mb-2"
                  type="search"
                  placeholder="From"
                  aria-label="Search"
                  name="fromCountry"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="col col-md-4 form-group col-xs-4">
                <input
                  className="form-control SearchBarInput mb-2 text-dark"
                  type="search"
                  placeholder="To"
                  aria-label="Search"
                  name="toCountry"
                  onChange={handleInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="col col-md-4 form-group align-items-end">
                <button
                  className="btn btn-warning mt-md-1 pr-lg-4 btn-block"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
