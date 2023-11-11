import axios from "axios";

const tomatoApiClient = axios.create({
  baseURL: "https://marcconrad.com/uob/tomato/api.php",
});
export default tomatoApiClient;
