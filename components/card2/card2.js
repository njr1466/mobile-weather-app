import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from './styles';
import MiniCard from './minicard';
import {getColorCard} from '../../screens/api/api';



const CardMiddle = (props) => {
  
  var color =  props.color;

  return (
    <View style={[styles.card, {backgroundColor:color}]}> 
     <View style={{flex:1,flexDirection:"row"}}>
         <Text style={styles.description}>Today</Text>
         <Text style={styles.description}>{props.day}</Text>
     </View>
     <View style={{flexDirection:"row"}}>
     <View style={{flexDirection:"row", marginLeft:15}}>
         <MiniCard description='sunrise' imagem="sunrise" hour={props.sunrise}></MiniCard>
         <MiniCard description='sunset' imagem="sunset" hour={props.sunset}></MiniCard>
     </View>
     </View>
    </View>
  );
};



export default CardMiddle;