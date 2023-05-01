import React from 'react';
import {  View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './stylesMiniCard';

const MiniCardHorizontal = (props) => {

  switch (props.condition) {
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

  return (

    <View style={styles.card} >
      <View style={styles.elements}>
        <View style={{ width: "38%" }}><Text style={styles.description1}>{props.day}</Text></View>
        <View style={{ width: "27%" }}><Text style={styles.description2}> <Image
          source={imagem}
          style={styles.imageCard}
        /></Text></View>
        <View style={{ width: "35%" }}><Text style={styles.description3}> {props.min}º - {props.max}º</Text></View>
      </View>
    </View>

  );
};


export default MiniCardHorizontal;