import React from "react";

export default function Footer({ footerRef }) {
  // const { scrollToBottom, footerRef } = props;
  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundColor: "black",
        marginTop: "8rem",
      }}
      ref={footerRef}
    >
      <footer className="pt-4 my-md-5 pt-md-5">
        <div className="container">
          <div className="row text-white">
            <div className="col-12 col-sm-12 col-lg-4">
              <h5 className="mb-2">About this project</h5>
              <p className="ml-2">
                It's primary purpose is to help people make desicions about
                their travel. During Covid-19, information is scattered around
                the place, with the help of technology we can solve this
                problem.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <h5 className="mb-2">Our Data</h5>
              <p className="ml-2">
                We make sure that our data is obtained from credibile sources
                and falls within their terms and conditions. Some of the sources
                that we use are:
              </p>
              <ul className="list-styled text-small ml-2">
                <li className="text-white">Center for Disease Control</li>
                <li className="text-white">
                  MathDroid api (for statistical data)
                </li>
                <li className="text-white">John Hopkins University</li>
                <li className="text-white">
                  Various other government health departments
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <h5 className="mb-4">
                For any questions or comments, you can reach me out directly on
              </h5>
              <ul className="list-unstyled text-small">
                <li className="text-muted">
                  <a
                    href="
                  https://twitter.com/tahaaakhan"
                  >
                    <i
                      className="fa fa-twitter"
                      style={{ fontSize: "32px", color: "#00acee" }}
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
              <h6>
                Please support this project so that I continue to provide this
                service for free. You can click on{" "}
                <a href="https://www.buymeacoffee.com/tahak">
                  support my project{" "}
                </a>{" "}
                to show your support.{" "}
              </h6>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-10 text-white">
              <hr className="bg-light"></hr>
              <p>
                Note: We try to present the most accurate information and
                sometimes unfortunately things can happen. It is recommended to
                refer to a wide variety of options before you make a decision.
                And as always refer to your country's health department.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
