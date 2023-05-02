import React,{useState} from 'react';
import {View, Text,Image } from 'react-native';
import styles from './stylesMiniCard';

const MiniCard = (props) => {
  switch (props.imagem) {
    case "sunset":
      var imagem =  require('../../assets/sunset.png') ;
      break;
    case "sunrise":
      var imagem =  require('../../assets/sunrise.png') ;
      break;
    default:
      var imagem =  require('../../assets/snow.png') ;
      break;
}
    return (
    <View style={styles.card}>
      <Text style={styles.description}>{props.description}</Text>
      <Image
       source={imagem}  
       style={styles.image} 
   />
      <Text style={styles.description}>{props.hour}</Text>
    </View>
  );
};

export default MiniCard;