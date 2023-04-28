import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=Gramado"
});

export default instance;


export const getResults = async (city) => {
  const { data } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name='+city);
  return data.results;
}

export const getTodayResults = async (city) => {
    const { data } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name='+city);
    return data.results.forecast[0];
  }

export const getForecast = async (city) => {
  const { results } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name='+city);
  return data.forecast;
}

