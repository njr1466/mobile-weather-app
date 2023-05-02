import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    card: {
      borderRadius: 29,
      paddingTop: 10,
      marginHorizontal: 0,
      marginVertical: 0,
      width: "90%",
      flex: 1,
      paddingBottom:0
     
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
      paddingLeft: 30,
      color:'#ffffff',
    },
    description1: {
      fontSize: 19,
      textAlign: "right", 
      fontWeight: 'bold',
      paddingLeft: 20,
      color:'#ffffff',
    
    },
    description2: {
      fontSize: 20,
      paddingLeft: 49,
      paddingTop: 20,
      color: '#ffffff'
    }
  });

  export default styles;


