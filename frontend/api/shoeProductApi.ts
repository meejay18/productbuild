import axios from "axios";

const url: string = "https://localhost:2256/api";

export const createProduct = async (data: {}) => {
  return await axios.post(`${url}/create-product`).then((res) => {
    return res.data;
  });
};
export const addNewProduct = async (data: {}) => {
  return await axios.post(`${url}/add-new-product`).then((res) => {
    return res.data;
  });
};
