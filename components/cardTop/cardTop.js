import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

const CardTop = (props) => {

  var color = props.color;

  return (

    <View style={[styles.card, { backgroundColor: color }]}  >

      <View style={{ width: "100%", fekx: 1, flexDirection: "row" }}>
        <View style={{ width: "30%" }}><Text style={styles.description1}>
          <Entypo name="water" size={17} color="#ffffff" />
          <Text style={styles.description}>{props.results.humidity}%</Text>
        </Text>
        </View>
        <View style={{ width: "30%" }}><Text style={styles.description2}>
          <MaterialCommunityIcons name="weather-hail" size={22} color="#ffffff" />
          <Text style={styles.description}>{props.today.rain_probability}%</Text>
        </Text>
        </View>
        <View style={{ width: "40%" }}><Text style={styles.description2}>
        <Feather name="wind" size={20} color="#ffffff" />
      <Text style={styles.description}>{props.results.wind_speedy}</Text> 
        </Text>
        </View>
      </View>
    </View>

  );
};


export default CardTop;