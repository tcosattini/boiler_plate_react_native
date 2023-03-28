import axios from "axios";
import Constants from "expo-constants";

const apiCall = axios.create({
  baseURL: Constants.expoConfig?.extra?.API_URL_PREPROD,
  headers: { "Content-type": "application/json" },
});

const { get, post, put, delete: destroy } = apiCall;
export { get, post, put, destroy };
