
import { StyleSheet } from 'react-native';

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

  export default styles;