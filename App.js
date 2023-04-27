import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from './components/card1'
import CardMiddle from './components/card2'
import CardBottom from './components/card3'
import Header from './components/header';
import axios from 'axios';


export default function App() {

  const [data, setData] = useState();
  const [temp, setTemp] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const [currently, setCurrently] = useState();
  const [city, setCity] = useState();
  const [humidity, setHumidity] = useState();
  const [forecast, setForecast] = useState([]);
  const [windspeedy, setWindspeedy] = useState();


  useEffect(() => {

    // Make a request  with a given ID

    async function getWeather(){
      await axios.get('https://api.hgbrasil.com/weather')
        .then(function (response) {
          // handle success
          setData(response.data);
          setTemp(response.data.results.temp);
          setDescription(response.data.results.description);
          setHumidity(response.data.results.humidity);
          setWindspeedy(response.data.results.wind_speedy);
          setForecast(response.data.results.forecast);
          setCity(response.data.results.city);
        
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }

    getWeather();

  }, [])




  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,1)', 'transparent']}
        style={styles.background}
      />
      <Header city={city}></Header>
      <Image
        source={require('./assets/solnublado.png')}
        style={{ width: 180, height: 180 }}
      />

      <Text style={{ fontSize: 80, color: "#ffffff" }}>{temp}º</Text>
      <Text style={{ fontSize: 18, color: "#ffffff" }}>{description}</Text>
      <Text style={{ fontSize: 18, color: "#ffffff" }}>Max: º  Min: 25º </Text>


      <View ></View>

      <CardTop description="90%" humidity={humidity} windspeedy={windspeedy}></CardTop>
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
    height: 200,
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