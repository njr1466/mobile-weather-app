import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const MiniCardHorizontal = (props) => {
  return (
 
     <View style={{flex:1,flexDirection:"row", justifyContent:"center"}}>
     
     <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
     <Text style={styles.description1}>{props.day}</Text> 
    </View>

    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
    <Image
       source={require('../assets/'+props.condition+'.png')}  
       style={{width: 30,  height: 30, margintop:2 , padding:25,margin:12}} 
   />
   
    </View>
    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
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
    width:330,
    height:180
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    paddingRight:30,
    paddingLeft:0,
    paddingTop:0,
    color:'#ffffff'
  },
  description1: {
    fontSize: 18,
    paddingRight:60,
    paddingLeft:2,
    paddingTop:20,
    color:'#ffffff'
  },
  description2: {
    fontSize: 18,
    paddingLeft:20,
    paddingTop:20,
    color:'#ffffff'
  }
});

export default MiniCardHorizontal;