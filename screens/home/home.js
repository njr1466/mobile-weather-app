import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Modal, ActivityIndicator, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CardTop from '../../components/cardTop/cardTop';
import CardMiddle from '../../components/cardMiddle/cardMiddle';
import CardBottom from '../../components/cardBottom/cardBottom';
import MainCard from '../../components/maincard/maincard';
import Header from '../../components/header/header';
import { getResults, getTodayResults, getColor, getCitySearch } from '../api/api';
import { getImage, getDatetoName } from '../utils/utils';
import { SearchBar, Image, Divider } from 'react-native-elements';
import styles from './styles';

export default function App({ }) {

  const [results, setResults] = useState([]);
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [today, setToday] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState('Gramado');
  const [searchText, setSearchText] = useState('');
  const [refresh, setrefresh] = useState();
  const [visible, setVisible] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const [colorCard, setColorCard] = useState();
  const [colorBack, setColorBack] = useState();
  const [loading, setLoading] = useState(true);
  const [filteredCidades, setFilteredCidades] = useState([]);
  const [city, setCity] = useState([]);


  const cidades = [
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
    { id: 4, nome: 'Curitiba' },
    { id: 5, nome: 'Porto Alegre' },
    { id: 6, nome: 'Brasília' },
    { id: 7, nome: 'Salvador' },
    { id: 8, nome: 'Fortaleza' },
    { id: 9, nome: 'Recife' },
    { id: 10, nome: 'Manaus' },
  ];

  const handleSearch1 = (text) => {
    const filtered = city.filter((cidade) =>
      cidade.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCidades(filtered);
    setSearchText(text);
  };

  const onClose = (cidade) => {
    setVisibleModal(false);
    setSearch(cidade.nome+"-"+cidade.microrregiao.mesorregiao.UF.sigla);
    setSearchText('');
    setrefresh(Math.random);
  }

  const handleCancel = () => {
    setSearch('');
  };

  const handleOpen = () => {

    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setVisibleModal(true);
    setFilteredCidades('');
  };

  const handleSearch = () => {
    if (visibleModal) {
      setVisibleModal(false);
    } else {
      setVisibleModal(true);
    }
    if(searchText != ""){
      setSearch(searchText);
    }
    setSearchText('');
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

    getCitySearch(search).then((response) => { 
     setCity(response);
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


          <Modal
            animationType="slide"
            visible={visibleModal}
            onRequestClose={onClose}
          >
            <View style={{ width: '100%' }}>

              <SearchBar
                placeholder="Procure uma cidade..."
                value={searchText}
                onChangeText={handleSearch1}
                containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent', padding: 40 }}
                inputContainerStyle={{ backgroundColor: '#fff' }}
                searchIcon={{ color: '#000' }}
                clearIcon={{ color: '#000', onPress: handleCancel }}
                onSubmitEditing={handleSearch}
                autoFocus={true}
              />

              <FlatList
                data={filteredCidades}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => onClose(item)}>
                    <Text style={{ padding: 10, fontSize: 18, color:'gray' }}>{item.nome} - {item.microrregiao.mesorregiao.UF.sigla}</Text>
                    <Divider style={{ backgroundColor: '#ebe2e1' }} />
                    
                  </TouchableOpacity>
                )}
              />

            </View>
          </Modal>



          <TouchableOpacity onPress={handleOpen}>
            <Header city={search}></Header>
          </TouchableOpacity>


          <MainCard image={image} temp={results.temp} today={today} > </MainCard>
          <CardTop results={results} color={colorCard} today={today}></CardTop>
          <CardMiddle day={date} sunrise={results.sunrise} sunset={results.sunset} color={colorCard}></CardMiddle>
          <CardBottom data={forecast} color={colorCard}></CardBottom>

        </View>
      }
    </ScrollView>
  );
}