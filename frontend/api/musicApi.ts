import axios from "axios";

const url: string = "http://localhost:2256/api";

export const createPlaylist = async (data: {}) => {
  return await axios.post(`${url}/create-playlist`).then((res) => {
    return res.data;
  });
};
export const searchsongs = async (data: {}) => {
  return await axios.post(`${url}/search-songs`).then((res) => {
    return res.data;
  });
};
