import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    card: {
      borderRadius: 29,
      elevation: 3,
      shadowColor: '#ffffff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      padding: 10,
      marginHorizontal: 16,
      marginVertical: 2,
      width: 370,
      flex: 1,
  
  
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 18,
      paddingRight: 180,
      paddingLeft:10,
      paddingTop: 0,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    description1: {
      fontSize: 18,
      paddingRight: 59,
      paddingTop: 20,
      color: '#ffffff',
  
    },
    description2: {
      fontSize: 20,
      paddingLeft: 49,
      paddingTop: 20,
      color: '#ffffff'
    }
  });

  export default styles;