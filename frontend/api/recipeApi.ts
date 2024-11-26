import axios from "axios";

const url: string = "http://localhost:2256/api";

export const createRecipe = async (data: {}) => {
  return axios.post(`${url}/create-recipe`).then((res) => {
    return res.data;
  });
};
export const getAllRecipes = async (data: {}) => {
  return axios.post(`${url}/get-all-recipes`).then((res) => {
    return res.data;
  });
};
