import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from '../../components/card1/card1';
import CardMiddle from '../../components/card2/card2';
import CardBottom from '../../components/card3/card3';
import Header from '../../components/header/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { SearchBar, Image } from 'react-native-elements';
import styles from './styles';
import {
  parseISO, isAfter,
  format,
  formatRelative,
  formatDistance
} from 'date-fns';


export default function App() {

  const [data, setData] = useState();
  const [temp, setTemp] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [description, setDescription] = useState();
  const [currently, setCurrently] = useState();
  const [city, setCity] = useState();
  const [humidity, setHumidity] = useState();
  const [forecast, setForecast] = useState([]);
  const [windspeedy, setWindspeedy] = useState();
  const [search, setSearch] = useState('Gramado');
  const [refresh, setrefresh] = useState();
  const [visible, setVisible] = useState(true);

  const datetoName = (data) => {
    const dat = data.substr(6, 4) + '-' + data.substr(3, 2) + '-' + data.substr(0, 2);
    const firstDate = parseISO(dat);
    const month = format(firstDate, "MMM");
    const day = format(firstDate, "d");
    setDate(month + ',' + day);
  };

  const handleCancel = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }

  };
  const handleSearch = () => {
    setrefresh(Math.random);
  };

  useEffect(() => {

    async function getWeather() {
      await axios.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + search)
        .then(function (response) {
          // handle success
          setData(response.data);
          setTemp(response.data.results.temp);
          setDescription(response.data.results.description);
          setHumidity(response.data.results.humidity);
          setWindspeedy(response.data.results.wind_speedy);
          setForecast(response.data.results.forecast);
          setCity(response.data.results.city);
          datetoName(response.data.results.date);
          setSunrise(response.data.results.sunrise);
          setSunset(response.data.results.sunset);
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

  }, [refresh])




  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,1)', 'transparent']}
          style={styles.background}
        />

        {!visible && (
          <View style={{ width: '100%' }}>
            <SearchBar
              placeholder="Procure uma cidade..."
              value={search}
              onChangeText={text => setSearch(text)}
              containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent', padding: 40 }}
              inputContainerStyle={{ backgroundColor: '#fff' }}
              searchIcon={{ color: '#000' }}
              clearIcon={{ color: '#000', onPress: handleCancel }}
              onSubmitEditing={handleSearch}
            />
          </View>
        )}

        {visible && (
          <TouchableOpacity onPress={handleCancel}>
            <Header city={search}></Header>
          </TouchableOpacity>
        )}

        {forecast.map((item, index) => {
          if (index === 0) {
            switch (item.condition) {
              case "rain":
                var imagem = require('../../assets/rain.png');
                break;
              case "cloud":
                var imagem = require('../../assets/cloud.png');
                break;
              case "clear_day":
                var imagem = require('../../assets/clear_day.png');
                break;
              case "clear_night":
                var imagem = require('../../assets/clear_night.png');
                break;
              case "cloudly_day":
                var imagem = require('../../assets/cloudly_day.png');
                break;
              case "cloudly_night":
                var imagem = require('../../assets/cloudly_night.png');
                break;
              case "snow":
                var imagem = require('../../assets/snow.png');
                break;
              case "fog":
                var imagem = require('../../assets/fog.png');
                break;
              case "hail":
                var imagem = require('../../assets/hail.png');
                break;
              case "storm":
                var imagem = require('../../assets/storm.png');
                break;

              default:
                var imagem = require('../../assets/cloudly_day.png');
                break;
            }
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={imagem}
                  style={{ width: 180, height: 180 }}
                />

                <Text style={{ fontSize: 80, color: "#ffffff" }}>{temp}º</Text>
                <Text style={{ fontSize: 18, color: "#ffffff" }}>{item.description}</Text>
                <Text style={{ fontSize: 18, color: "#ffffff" }}>Max: {item.max} º  Min: {item.min}º </Text>
              </View>
            );
          }
          return null;
        })}

        <View ></View>

        <CardTop description="90%" humidity={humidity} windspeedy={windspeedy}></CardTop>
        <CardMiddle day={date} sunrise={sunrise} sunset={sunset}></CardMiddle>
        <CardBottom data={forecast} ></CardBottom>

      </View>
    </ScrollView>
  );
}
