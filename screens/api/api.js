// import axios from 'axios';

// const instance = axios.create({
//     baseURL: "https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=Gramado"
// });

// export default instance;


// export const getResults = async (city) => {
//     const { data } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + city);
//     return data.results;
// }

// export const getTodayResults = async (city) => {
//     const { data } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + city);
//     return data.results.forecast[0];
// }

// export const getForecast = async (city) => {
//     const { results } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + city);
//     return data.forecast;
// }

// export const getColor = async (city) => {
//     const { data } = await instance.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + city);
//     return data.results.currently;
    
// }

// export const getCitySearch= async (city) => {
//     const { data } = await instance.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');
//     return data;
    
// }


// export const getColorBackground = async () => {

//     if (color != "night") {
//         return "#134CB5";
//     } else {
//         return "#5398bd";
//     }
//     return (color == 'night') ? "#134CB5" : "#134CB5";
// }

// export const getColorCard = (color) => {
//     if (color == "night") {
//         return "#104084";
//     } else {
//         return "#5398bd";
//     }

// }