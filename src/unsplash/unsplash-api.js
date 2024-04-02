

import axios from "axios";

const API_KEY = "FNo34P4mRw9F3UdsG0yFmktyyZ6CJmRITbCpFoAH0zY";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const requestImages = async (query, page) => {
  const { data } = await axios.get("search/photos", {
    params: {
      query: query,
      page: page,
    },
  });

  return data;
};