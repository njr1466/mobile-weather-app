import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import MiniCardHorizantal from './minicardhorizontal';
const Cardbottom = (props) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection:"row"}}>
         <Text style={styles.description}>NextForecast</Text>
         <Text style={styles.description}>Mar,30</Text>
     </View>
     <MiniCardHorizantal></MiniCardHorizantal>
     <MiniCardHorizantal></MiniCardHorizantal>
     <MiniCardHorizantal></MiniCardHorizantal>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#104084',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 2,
    width:330,
    height:200
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    paddingRight:130,
    paddingTop:0,
    color:'#ffffff',
    
  },
  description1: {
    fontSize: 18,
    paddingRight:56,
    paddingTop:20,
    color:'#ffffff',
    
  },
  description2: {
    fontSize: 20,
    paddingLeft:49,
    paddingTop:20,
    color:'#ffffff'
  }
});

export default Cardbottom;