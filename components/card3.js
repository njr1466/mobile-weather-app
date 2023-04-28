import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import MiniCardHorizantal from './card3/minicardhorizontal';
const Cardbottom = (props) => {
  return (

    <ScrollView>
      <View style={styles.card}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.description}>NextForecast</Text>
          <Text style={styles.description}>Mar,30</Text>
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
    width: 330,
    flex: 1,


  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    paddingRight: 130,
    paddingTop: 0,
    color: '#ffffff',

  },
  description1: {
    fontSize: 18,
    paddingRight: 56,
    paddingTop: 20,
    color: '#ffffff',

  },
  description2: {
    fontSize: 20,
    paddingLeft: 49,
    paddingTop: 20,
    color: '#ffffff'
  }
});

export default Cardbottom;