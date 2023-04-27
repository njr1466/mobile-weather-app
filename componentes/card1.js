import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CardTop = (props) => {
  return (
    <View style={styles.card}>
     

     <MaterialCommunityIcons name="grain" size={20} color="#ffffff"  style={styles.description}>
      <Text >{props.description}</Text>
      </MaterialCommunityIcons>
      <FontAwesome5 name="temperature-high" size={20} color="#ffffff" style={styles.description}>
      <Text >{props.description}</Text>
      </FontAwesome5>
      <Feather name="wind" size={20} color="#ffffff" style={styles.description}>
      <Text >{props.description}</Text>
      </Feather>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#104084',
    borderRadius: 16,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    width:330,
    textAlign:"center",
    alignContent:"center",
    alignItems:"center",
    flexDirection:"row"
    
    
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    padding:10,
    paddingRight:50,
    fontWeight:"bold"
    
  },
});

export default CardTop;