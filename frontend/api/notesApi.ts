import axios from "axios";

const url: string = "http://localhost:2256/api";

export const createNote = async (data: {}) => {
  return axios.post(`${url}/create-Note`).then((res) => {
    return res.data;
  });
};
export const deleteNote = async (data: {}) => {
  return axios.post(`${url}/delete-Note`).then((res) => {
    return res.data;
  });
};
