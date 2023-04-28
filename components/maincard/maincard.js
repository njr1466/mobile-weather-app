import React,{useState} from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

const MainCard = (props) => {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={props.image}
          style={{ width: 180, height: 180 }}
        />

      <Text style={{ fontSize: 80, color: "#ffffff" }}>{props.temp}º</Text>

        <Text style={{ fontSize: 18, color: "#ffffff" }}>{props.today.description}</Text>
        <Text style={{ fontSize: 18, color: "#ffffff" }}>Max: {props.today.max} º  Min: {props.today.min}º </Text> 
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

export default MainCard;