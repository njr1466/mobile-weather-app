import { StyleSheet } from 'react-native';

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
      padding:0,
      paddingRight:0,
      paddingLeft:0,
      fontWeight:"bold",
      justifyContent:"center",
      color:"#ffffff"
    },
    description1: {
      fontSize: 19,
      textAlign: "left",
      fontWeight: 'bold', 
      paddingLeft: 20,
      color:'#ffffff',
    },
    description2: {
      fontSize: 19,
      textAlign: "center", 
      fontWeight: 'bold',
      paddingRight: 15,
      color:'#ffffff',
    
    },
    description3: {
      fontSize: 19,
      textAlign: "right", 
      fontWeight: 'bold',
      paddingRight: 0,
      color:'#ffffff',
    
    }

  });

  export default styles;