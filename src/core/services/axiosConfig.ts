import axios from "axios";

const BACK_END_BASE_URL = "https://pokeapi.co/api/v2/";

const instanceAxios = axios.create({
  baseURL: BACK_END_BASE_URL,
});

export const get = async (url: string) => {
  try {
    const response = await instanceAxios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string) => {
  try {
    const response = await instanceAxios.post(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
