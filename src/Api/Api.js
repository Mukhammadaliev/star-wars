import axios from "axios";
export const HTTPS = 'https://';
export const HTTP = 'http://';
export const API_URL = `${HTTPS}swapi.dev/api/`;
export const PARAM_PAGE = '/?page=';
export const SEARCH_URL = '/?search='

export const GET_API = `${API_URL}people${PARAM_PAGE}`

export default class getApiResourcee {
  static async getAllPeople(url) {
    try {
      const response = await axios.get(url)

      if(!response.status) {
        console.log(response.status);
        // return false
      }

      return response.data
    } catch (error) {
      console.error(`asdasdfsfdsff ${error.message}`);
      return false
    }
  }
}