import React from "react";

export default function Alert() {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Hey there!</strong> We have added the top 4 countries with
            the most Covid-19 cases. Be sure to check them out, if it is one of
            your next travelling destinations. I will appreciate if you can
            support this project by clicking on{" "}
            <strong>
              <a
                href="https://www.buymeacoffee.com/tahak"
                className="text-dark"
              >
                Support this Project{" "}
              </a>{" "}
            </strong>
            link.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <hr />
            <ul className="list-inline">
              <li className="list-inline-item">Data available for:</li>
              <li className="list-inline-item">United States,</li>
              <li className="list-inline-item">India, and</li>
              <li className="list-inline-item">Brazil</li>
              <li className="list-inline-item">Russia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
