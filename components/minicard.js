import React,{useState} from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

const MiniCard = (props) => {
  
  
    return (
    <View style={styles.card}>
      <Text style={styles.description}>{props.description}ºC</Text>
      <Image
       source={require("../assets/solnublado.png")}  
       style={{width: 30, height: 30, marginLeft:4,margin:10}} 
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
    width:70,
    height:140,
    paddingTop:30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color:'#ffffff',
  },
});

export default MiniCard;