import React, { Fragment, useState, useEffect } from "react";
import "./stylingcomponents.css";
import Tiles from "./Tiles";
import Search from "./Search";
import Footer from "./Footer";
import { getDataForAllCountries } from "../data/fetchCountries";

export default function Main() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const { data } = await getDataForAllCountries();
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Fragment>
      <Search />
      {messages ? <Tiles messages={messages} /> : null}
      <Footer />
    </Fragment>
  );
}
