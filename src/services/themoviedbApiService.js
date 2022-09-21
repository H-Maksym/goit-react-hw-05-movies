// const axios = require('axios');
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd3bb769880d7129a875d091908f7afe1';
axios.defaults.params = { api_key: API_KEY, language: 'en-US' };

export async function getSearchMovieResult(query = '', page = 1) {
  const response = await axios.get(`search/movie?query=${query}&page=${page}`);
  return response.data;
}

export async function getMovieTrend(page = 1) {
  const response = await axios.get(`/trending/movie/day?page=${page}`);
  return response.data;
}

export async function getSearchMovieById(id) {
  const response = await axios.get(`movie/${id}`);
  return response.data;
}

export async function getSearchCreditsMovieById(id) {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data;
}

export async function getSearchReviewsMovieById(id) {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data;
}

// export async function getGenres() {
//   const { data: genres } = await axios.get(`genre/movie/list`);
//   return genres;
// }

const API = {
  getSearchMovieResult,
  getMovieTrend,
  getSearchMovieById,
  getSearchCreditsMovieById,
  getSearchReviewsMovieById,
};

export default API;
