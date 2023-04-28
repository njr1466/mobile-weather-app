import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TextInput,  Modal, TouchableOpacity } from 'react-native'; 
import { SearchBar } from 'react-native-elements';



const CardTop = (props) => {

const [search, setSearch] = useState();


  return (



    <View style={styles.card}>
     

     <Ionicons name="location-outline" size={24} color="#ffffff" />
      <Text style={styles.description}>{props.city}</Text>
      <AntDesign name="caretdown" size={24} color="#ffffff" />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    width:330,
    textAlign:"center",
    paddingTop:25,
    flexDirection:"row"
    
    
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    padding:10,
    paddingRight:5,
    fontWeight:"bold",
    color:"#ffffff"
    
  },
});

export default CardTop;