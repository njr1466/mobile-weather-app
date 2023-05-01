import React,{useState} from 'react';
import {View, Text,Image } from 'react-native';
import styles from './styles';

const MainCard = (props) => {

    return (
        <View style={styles.card}>
        <Image
          source={props.image}
          style={styles.image}
        />
      <Text style={styles.descriptionLeft}>{props.temp}º</Text>
        <Text style={styles.description}>{props.today.description}</Text>
        <Text style={styles.description}>Max: {props.today.max} º  Min: {props.today.min}º </Text> 
      </View>
  );
};

export default MainCard;