import { StyleSheet } from 'react-native';
import {getColor} from '../../screens/api/api';
import {getColorCard} from '../../screens/api/api';

const styles = StyleSheet.create({
    card: {
     marginTop:10,
      borderRadius: 29,
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 0,
      width:"90%",
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
      padding:1,
      paddingRight:0,
      paddingLeft:6,
      fontWeight:"bold",
      justifyContent:"center",
      color:"#ffffff"
      
      
    },
  });

  export default styles;