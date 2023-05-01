import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Header = (props) => {

  const [search, setSearch] = useState();

  return (
    <View style={styles.card}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Ionicons name="location-outline" size={24} color="#ffffff" />
        <Text style={styles.description}>{props.city}</Text>
        <AntDesign name="caretdown" size={20} color="#ffffff" />
      </View>
      <View >
        <Ionicons name="notifications-outline" size={24} color="#ffffff" />
      </View>
    </View >
  );
};


export default Header;