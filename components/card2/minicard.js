import React,{useState} from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#104084',
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    padding: 12,
    marginHorizontal: 4,
    marginVertical: 2,
    width:110,
    height:140,
    paddingTop:30,
   alignItems:"center",
   marginLeft:21
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 17,
    color:'#ffffff',
  },
  image: {
    width: 60, 
    height: 60
  },
});

export default MiniCard;