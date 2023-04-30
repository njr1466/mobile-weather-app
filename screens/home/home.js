import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from '../../components/cardTop/cardTop';
import CardMiddle from '../../components/cardMiddle/cardMiddle';
import CardBottom from '../../components/cardBottom/cardBottom';
import MainCard from '../../components/maincard/maincard';
import Header from '../../components/header/header';
import { getResults, getTodayResults, getColor } from '../api/api';
import { getImage, getDatetoName } from '../utils/utils';
import { SearchBar, Image } from 'react-native-elements';
import styles from './styles';

export default function App() {

  const [results, setResults] = useState([]);
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [today, setToday] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState('Gramado');
  const [refresh, setrefresh] = useState();
  const [visible, setVisible] = useState(true);
  const [colorCard, setColorCard] = useState();
  const [colorBack, setColorBack] = useState();
  const [loading, setLoading] = useState(true);

  const handleCancel = () => {
    setSearch('');
  };

  const handleOpen = () => {

    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleSearch = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setrefresh(Math.random);
  };

  useEffect(() => {
    getResults(search).then((response) => {
      setResults(response);
      setForecast(response.forecast);
      setDate(getDatetoName(response.date));
      setLoading(false);
    });

    getTodayResults(search).then((response) => {
      setToday(response);
      setImage(getImage(response.condition));
    });

    getColor(search).then((response) => {
      setColorCard((response === "noite") ? "#104084" : "#0490BC");
      setColorBack((response === "noite") ? "#134CB5" : "#47BBE1");

    });

  }, [refresh])

  return (
    <ScrollView>
      {loading ?
        <View >
          <ActivityIndicator size="large" color="#0000ff" />
        </View> :
        <View style={[styles.container, { backgroundColor: colorBack }]}  >
          <LinearGradient
            colors={['rgba(0,0,0,1)', 'transparent']}
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
            <TouchableOpacity onPress={handleOpen}>
              <Header city={search}></Header>
            </TouchableOpacity>
          )}

          <MainCard image={image} temp={results.temp} today={today} > </MainCard>
          <CardTop results={results} color={colorCard} today={today}></CardTop>
          <CardMiddle day={date} sunrise={results.sunrise} sunset={results.sunset} color={colorCard}></CardMiddle>
          <CardBottom data={forecast} color={colorCard}></CardBottom>

        </View>
      }
    </ScrollView>
  );
}
