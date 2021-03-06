import React, { useState, useEffect, useRef } from "react";
import "./stylingcomponents.css";
import Tiles from "./Tiles";
// import Search from "./Search";
import Footer from "./Footer";
import { getDataForAllCountries } from "../data/fetchCountries";
import Navbar from "./Navbar";
import useSWR from "swr";
import Alert from "./Alert";
import ReactGA from "react-ga";
import CookieAlert from "./CookieAlert";

export default function Main() {
  const [messages, setMessages] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [displayLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const { data, error } = useSWR(
    mounted ? "https://pure-sea-87964.herokuapp.com/api/messages/" : null,
    getDataForAllCountries
  );

  if (data) {
    setMessages(data.data);
    setMounted(false);
    setLoading(false);
  }
  if (error) {
    setErrorMessage(true);
    setMounted(false);
    setLoading(false);
  }

  const footerEndRef = useRef(null);

  const handleScroll = () => {
    footerEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    ReactGA.initialize("UA-181831388-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    setMounted(true);
    // ReactGa.pageview("");
  }, [footerEndRef]);

  return (
    <div className="container-fluid">
      <Navbar scrollToFooter={handleScroll} />
      {/* <Search handleInputChange={handleInput} /> */}
      <Alert countries={messages} />
      {displayLoading && (
        <div className="container" style={{ width: "3rem", height: "3rem" }}>
          <div className="row d-flex justfiy-content-center">
            <div className="col-8">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {errorMessage && (
        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div className="col-8 col-md-6">
            <div className="card border-dark">
              <div className="card-body ">
                <h5 className="card-title">Oops We are sorry!</h5>
                <p className="card-text">
                  There's some problem with our system. We will fix it ASAP.
                  Please check back later.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {messages && <Tiles messages={messages} />}
      {/* {fromCountry && toCountry && (
        <GroupTiles fromCountry={fromCountry} toCountry={toCountry} />
      )} */}
      <CookieAlert />
      <Footer footerRef={footerEndRef} />
    </div>
  );
}
