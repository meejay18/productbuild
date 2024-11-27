import axios from "axios";

const url: string = "http://localhost:2256/api";

export const createExercise = async (data: {}) => {
  return axios.post(`${url}/create-Exercise`).then((res) => {
    return res.data;
  });
};
export const getAllExercises = async (data: {}) => {
  return axios.post(`${url}/get-All-Exercises`).then((res) => {
    return res.data;
  });
};
