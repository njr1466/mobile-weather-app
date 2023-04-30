import React,{useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from './stylesDay' ;
import {getColor} from '../../screens/api/api';



const CardTop = (props) => {

var color =  props.color;

  return (
   
    <View style={[styles.card, {backgroundColor:color}]}  >
     <View style={{flex:1, flexDirection:"row"}}>
     <MaterialCommunityIcons name="grain" size={20} color="#ffffff"  style={styles.description}>
      </MaterialCommunityIcons>
      <Text style={styles.description}>{props.humidity}%</Text>
      </View>

      <View style={{flex:1, flexDirection:"row"}}>
     <FontAwesome5 name="temperature-high" size={20} color="#ffffff"  style={styles.description}/>
      <Text style={styles.description}>{props.description}</Text>
      </View>

      <View style={{flex:1, flexDirection:"row"}}>
      <Feather name="wind" size={20} color="#ffffff" style={styles.description}/>
      <Text style={styles.description}>{props.windspeedy}</Text>
      
      </View>

    </View>
   
  );
};



export default CardTop;