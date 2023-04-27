import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CardTop = (props) => {
  return (
    <View style={styles.card}>
     
     <View style={{flex:1, flexDirection:"row"}}>
     <MaterialCommunityIcons name="grain" size={20} color="#ffffff"  style={styles.description}>
      </MaterialCommunityIcons>
      <Text style={styles.description}>{props.humidity}%</Text>
      </View>

      <View style={{flex:1, flexDirection:"row"}}>
     <FontAwesome5 name="temperature-high" size={20} color="#ffffff"  style={styles.description}/>
      <Text style={styles.description}>{props.description}</Text>
      </View>

      <View style={{flex:1, flexDirection:"row"}}>
      <Feather name="wind" size={20} color="#ffffff" style={styles.description}/>
      <Text style={styles.description}>{props.windspeedy}</Text>
      
      </View>
      
      
      
      
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
    flexDirection:"row",
    flex:1
    
    
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    padding:2,
    paddingRight:1,
    fontWeight:"bold",
    justifyContent:"center",
    color:"#ffffff"
    
    
  },
});

export default CardTop;