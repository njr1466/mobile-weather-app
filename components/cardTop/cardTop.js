import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Icon} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import styles from './styles' ;
import {getColor} from '../../screens/api/api';



const CardTop = (props) => {

var color =  props.color;

  return (
   
    <View style={[styles.card, {backgroundColor:color}]}  >
     <View style={{flex:1, flexDirection:"row",}}>
     <Entypo name="water" size={17} color="#ffffff" />
      <Text style={styles.description}>{props.results.humidity}%</Text>
      </View>

      <View style={{flex:1, flexDirection:"row",paddingLeft:20}}>
      <MaterialCommunityIcons name="weather-hail" size={22} color="#ffffff"  />
      <Text style={styles.description}>{props.today.rain_probability}%</Text>
      </View>

      <View style={{flex:1, flexDirection:"row"}}>
      <Feather name="wind" size={20} color="#ffffff" />
      <Text style={styles.description}>{props.results.wind_speedy}</Text>
      
      </View>

    </View>
   
  );
};



export default CardTop;