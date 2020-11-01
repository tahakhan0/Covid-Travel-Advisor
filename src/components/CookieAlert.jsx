import React from "react";

export default function CookieAlert() {
  return (
    <div className="fixed-bottom">
      <div className="row d-flex justify-content-center mb-0">
        <div className="col-10 col-sm-6">
          <div
            className="alert alert-dismissible fade show"
            role="alert"
            style={{ backgroundColor: "#003542", color: "white" }}
          >
            This site uses cookies to enhance your experience.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              style={{ color: "white" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
