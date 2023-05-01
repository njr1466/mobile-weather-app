import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    card: {
      paddingLeft: 30,
      flex: 1,
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-between"
  
    },
    elements: { 
      width: "100%", 
      flex: 1, 
      flexDirection: "row", 
      paddingTop:10
    },
    imageCard: {
      width: 40, 
      height: 40, 
     
    },
    description1: {
      fontSize: 18,
      paddingTop:8,
      paddingLeft: 0,
      textAlign: 'left',
      color: '#ffffff'
    },
    description2: {
      fontSize: 18,
      flexDirection: "row",
      justifyContent: 'center',
      color: '#ffffff'
    },
    description3: {
      fontSize: 18,
      paddingTop:8,
      paddingRight: 0,
      textAlign: 'right',
      color: '#ffffff'
    }
  });

  export default styles;


