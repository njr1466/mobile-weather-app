import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import MiniCardHorizantal from './minicardhorizontal';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { getColorCard } from '../../screens/api/api';

const Cardbottom = (props) => {

  var color =  props.color;

  return (

    <ScrollView>
      <View style={[styles.card, {backgroundColor:color}]}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.description}>NextForecast</Text>
          <Entypo name="calendar" size={24} color="#ffffff" />
        </View>
        {props.data.map((nome, index) => {
          if (index != 0) {
            return (
              <MiniCardHorizantal day={nome.weekday} max={nome.max} min={nome.min} condition={nome.condition}></MiniCardHorizantal>
            );
          }
          return null;
        })}


      </View>
    </ScrollView>
  );
};



export default Cardbottom;