// @flow
import axios from 'axios';

const pokemon = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1'
});

export default pokemon;