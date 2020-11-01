import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// const apiUrl = "https://pure-sea-87964.herokuapp.com/api/";

const allMessages = "/messages/";

export function getDataForAllCountries() {
  // let Token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0MTYzNTgwLCJqdGkiOiI2N2I5ZmNmOGE2ZmM0YzVhYTg2NGQwZDEyYjFjMjI0YyIsInVzZXJfaWQiOjF9.xYUbeVIYQRwA37OcGwRIAUeG0S2L_-UvFWVBQzIwPGw";
  // {
  //   headers: { Authorization: `Bearer ${Token}` },
  // },

  return Axios.get(allMessages);
}
