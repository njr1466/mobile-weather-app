
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      borderRadius: 29,
      elevation: 3,
      shadowColor: '#ffffff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 0,
      padding: 10,
      marginHorizontal: 14,
      marginVertical: 10,
      width:'90%',
      height:200,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 19,
      textAlign: "left",
      fontWeight: 'bold', 
      paddingLeft: 15,
      color:'#ffffff',
    },
    description1: {
      fontSize: 19,
      textAlign: "right", 
      fontWeight: 'bold',
      paddingRight: 15,
      color:'#ffffff',
    
    },

    
  });

  export default styles;