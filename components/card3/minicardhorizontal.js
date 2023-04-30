import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar, Image } from 'react-native-elements';


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

    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.description1}>{props.day}</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingLeft:10 }}>
        <Image
          source={imagem}
          style={{ width: 40, height: 40,  margin: 12 }}
        />

      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.description2}>{props.min}º - {props.max}º</Text>
      </View>



    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#104084',
    borderRadius: 16,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    padding: 5,
    width: 330,
    height: 180
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    paddingRight: 30,
    color: '#ffffff'
  },
  description1: {
    fontSize: 18,
    paddingRight: 70,
    paddingLeft: 2,
    color: '#ffffff'
  },
  description2: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 0,
    color: '#ffffff'
  }
});

export default MiniCardHorizontal;