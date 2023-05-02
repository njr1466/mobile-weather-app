import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MiniCard from './miniCard';

const CardMiddle = (props) => {

  var color = props.color;

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={{ width: "100%", fekx: 1, flexDirection: "row" }}>
        <View style={{ width: "50%" }}><Text style={styles.description}>Today</Text></View>
        <View style={{ width: "50%" }}><Text style={styles.description1}>{props.day}</Text></View>
      </View>
      <View style={{ width: "100%", fekx: 1, flexDirection: "row" }}>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <MiniCard description='sunrise' imagem="sunrise" hour={props.sunresults.sunrise}></MiniCard>
        </View>
        <View style={{ width: "50%", alignItems: "flex-start" }}>
          <MiniCard description='sunset' imagem="sunset" hour={props.sunresults.sunset}></MiniCard>
        </View>
      </View>

    </View>
  );
};



export default CardMiddle;
