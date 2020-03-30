import axios from "axios";

export default axios.create({
  baseURL: `https://swapi.co/api/starships`
});

export const API_URL = "https://swapi.co/api/starships";
export const SEARCH_URL = "https://swapi.co/api/starships/?search=";
