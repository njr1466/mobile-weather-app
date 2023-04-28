import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MiniCard from './minicard';
const CardMiddle = (props) => {
  return (
    <View style={styles.card}>
    
     <View style={{flex:1,flexDirection:"row"}}>
         <Text style={styles.description}>Today</Text>
         <Text style={styles.description}>{props.day}</Text>
     </View>
     <View style={{flexDirection:"row"}}>
     <View style={{flexDirection:"row"}}>
         <MiniCard description='26' imagem="sol.png" hour="15:00"></MiniCard>
         <MiniCard description='28' imagem="clear_day.png" hour="16:00"></MiniCard>
         <MiniCard description='29' imagem="chuva.png" hour="17:00"></MiniCard>
         <MiniCard description='30' imagem="clear_day.png" hour="18:00"></MiniCard>
     
     </View>
     </View>

     
  
      
      

    </View>
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
    shadowRadius: 0,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    width:330,
    height:200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    paddingRight:180,
    color:'#ffffff',
    marginRight:20
  
  },
});

export default CardMiddle;