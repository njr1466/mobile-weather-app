import React,{useEffect,useState} from 'react';
import { StyleSheet, Image,Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from './componentes/card1'
import CardMiddle from './componentes/card2'
import CardBottom from './componentes/card3'

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,1)', 'transparent']}
        style={styles.background}
      />
      <Image
       source={require('./assets/solnublado.png')}  
       style={{width: 180, height: 180}} 
   />
      
      <Text style={{fontSize:80, color:"#ffffff"}}>28º</Text>
      <Text style={{fontSize:18, color:"#ffffff"}}>Precipitations</Text>
      <Text style={{fontSize:18, color:"#ffffff"}}>Max: 31º  Min: 25º </Text>
    

    <View ></View>
    
    <CardTop description="90%"></CardTop>
    <CardMiddle></CardMiddle>
    <CardBottom></CardBottom>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#134CB5',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:200,
    backgroundColor: '#ffffff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});