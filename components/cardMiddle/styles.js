
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
      fontSize: 18,
      fontWeight:"bold",
      paddingRight:190,
      paddingLeft:10,
      color:'#ffffff',
      justifyContent: 'flex-start'
    
    },
    description1: {
      fontSize: 18,
      fontWeight:"bold",
      paddingRight:170,
      paddingLeft:50,
      color:'#ffffff',
      justifyContent: 'flex-end',
    
    },

    
  });

  export default styles;