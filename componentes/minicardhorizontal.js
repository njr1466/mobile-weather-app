import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

const MiniCardHorizontal = (props) => {
  return (
 
     <View style={{flexDirection:"collumn"}}>
     <View style={{flexDirection:"row"}}>
     <Text style={styles.description1}>Monday</Text> 
     <Image
       source={require('../assets/solnublado.png')}  
       style={{width: 30,  height: 30, padding:22,margin:6}} 
   />
   <Text style={styles.description2}>20º - 29º</Text> 
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
    paddingRight:50,
    paddingTop:0,
    color:'#ffffff'
  },
  description1: {
    fontSize: 18,
    paddingRight:60,
    paddingTop:20,
    color:'#ffffff'
  },
  description2: {
    fontSize: 18,
    paddingLeft:50,
    paddingTop:20,
    color:'#ffffff'
  }
});

export default MiniCardHorizontal;