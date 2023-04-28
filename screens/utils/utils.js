import { parseISO, isAfter, format, formatRelative, formatDistance } from 'date-fns';

export const getImage =  (image) => {
    switch (image) {
        case "rain":
          var imagem = require('../../assets/rain.png');
          break;
        case "cloud":
          var imagem = require('../../assets/cloud.png');
          break;
        case "clear_day":
          var imagem = require('../../assets/clear_day.png');
          break;
        case "clear_night":
          var imagem = require('../../assets/clear_night.png');
          break;
        case "cloudly_day":
          var imagem = require('../../assets/cloudly_day.png');
          break;
        case "cloudly_night":
          var imagem = require('../../assets/cloudly_night.png');
          break;
        case "snow":
          var imagem = require('../../assets/snow.png');
          break;
        case "fog":
          var imagem = require('../../assets/fog.png');
          break;
        case "hail":
          var imagem = require('../../assets/hail.png');
          break;
        case "storm":
          var imagem = require('../../assets/storm.png');
          break;

        default:
          var imagem = require('../../assets/cloudly_day.png');
          break;
      }
      return imagem;
  }




  export const getDatetoName = (data) => {
    const dat = data.substr(6, 4) + '-' + data.substr(3, 2) + '-' + data.substr(0, 2);
    const firstDate = parseISO(dat);
    const month = format(firstDate, "MMM");
    const day = format(firstDate, "d");
    return(month + ',' + day);
  };