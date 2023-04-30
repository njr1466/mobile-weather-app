import { StyleSheet } from 'react-native';
import {getColor} from '../../screens/api/api';
import {getColorCard} from '../../screens/api/api';



const styles = StyleSheet.create({
    card: {
     
      borderRadius: 29,
      padding: 10,
      marginHorizontal: 16,
      marginVertical: 8,
      width:330,
      textAlign:"center",
      alignContent:"center",
      alignItems:"center",
      flexDirection:"row",
   
      
      
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

  export default styles;