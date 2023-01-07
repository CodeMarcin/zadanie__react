import axios from "axios";

export const getBasicDataAPI = async (page: number, perPage = 5) => {
  return await axios.get<IBasicDataAPI>(`https://reqres.in/api/products?page=${page}&per_page=${perPage}`);
};

export const getProductByIdAPI = async (id: string) => {
  return await axios.get<ISingleItemAPI>(`https://reqres.in/api/products/${id}`);
};
