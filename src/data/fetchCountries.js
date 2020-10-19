import Axios from "axios";

const apiUrl = "http://localhost:8000/api/";
const allMessages = apiUrl + "messages/";

export function getDataForAllCountries() {
  return Axios.get(allMessages);
}
