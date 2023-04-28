import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from '../../components/card1/card1';
import CardMiddle from '../../components/card2/card2';
import CardBottom from '../../components/card3/card3';
import MainCard from '../../components/maincard/maincard';
import Header from '../../components/header/header';
import { getResults, getTodayResults, getType } from '../api/api';
import { getImage,getDatetoName } from '../utils/utils';
import { SearchBar, Image } from 'react-native-elements';
import styles from './styles';



export default function App() {

  const [results, setResults] = useState([]);
  const [date, setDate] = useState();
  const [image,setImage] = useState();
  const [today, setToday] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState('Gramado');
  const [refresh, setrefresh] = useState();
  const [visible, setVisible] = useState(true);
  const [light, setLight] = useState(true);

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
      getResults(search).then((response) => {
      setResults(response);
      setForecast(response.forecast);
      setDate(getDatetoName(response.date));
    });


    getTodayResults(search).then((response) => {
      setToday(response);
      setImage(getImage(response.condition));
    });

  
   

  }, [refresh])


   const colors = (results.currently == "dia") ? ['rgba(0,0,0,1)','#69daf5', '#69daf5'] : ['rgba(0,0,0,1)','#134CB5', '#134CB5']

  return (
    <ScrollView>
      <View style={styles.container}  >
        <LinearGradient
          colors={colors}
          
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

        <MainCard image={image} temp={results.temp} today={today}> </MainCard>
        <CardTop description="90%" humidity={results.humidity} windspeedy={results.wind_speedy}></CardTop>
        <CardMiddle day={date} sunrise={results.sunrise} sunset={results.sunset}></CardMiddle>
        <CardBottom data={forecast} ></CardBottom>

      </View>
    </ScrollView>
  );
}
