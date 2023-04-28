import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity,  Image, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from './components/card1';
import CardMiddle from './components/card2';
import CardBottom from './components/card3';
import Header from './components/header';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import { parseISO, isAfter, 
  format, 
  formatRelative, 
  formatDistance } from 'date-fns';
 

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
  const [search, setSearch] = useState('Gramado');
  const [refresh, setrefresh] = useState();
  const [visible, setVisible] = useState(true);

  const datetoName = (data) => {
    const dat = data.substr(6,4)+'-'+data.substr(3,2)+'-'+data.substr(0,2);
    const firstDate = parseISO(dat);
    const month = format(firstDate, "MMM");
    const day = format(firstDate,"d");
    setDate(month+','+day);
  };

  const handleCancel = () => {
    if(visible){
      setVisible(false);
    }else{
      setVisible(true);
    }
   
  };
  const handleSearch = () => {
    setrefresh(Math.random);
  };

  useEffect(() => {

    async function getWeather(){
      await axios.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name='+search)
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
        containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
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
          return (
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
            <Image
            source={require('./assets/'+item.condition+'.png')} 
              style={{ width: 180, height: 180 }}
            />
             <Text style={{ fontSize: 80, color: "#ffffff" }}>{temp}º</Text>
             <Text style={{ fontSize: 18, color: "#ffffff" }}>{description}</Text>
      <Text style={{ fontSize: 18, color: "#ffffff" }}>Max: {item.max} º  Min: {item.min}º </Text>
            </View>
          );
        }
        return null;
      })} 


      
      


      <View ></View>

      <CardTop description="90%" humidity={humidity} windspeedy={windspeedy}></CardTop>
      <CardMiddle day={date}></CardMiddle>
      <CardBottom data={forecast} ></CardBottom>

    </View>
    </ScrollView>
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