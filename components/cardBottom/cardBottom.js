// import React from 'react';
// import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
// import MiniCardHorizantal from './minicardhorizontal';
// import { Entypo } from '@expo/vector-icons';
// import styles from './styles';

// const Cardbottom = (props) => {

//   var color = props.color;

//   return (

//     <ScrollView style={[styles.card, { backgroundColor: color }]}>
//       <View style={[styles.card, { backgroundColor: color }]}>
//         <View style={[styles.description, { flex: 1, flexDirection: 'row' }]}>
//           <Text style={styles.description}>NextForecast</Text>
//           <Entypo name="calendar" size={24} color="#ffffff" />
//         </View>
//         {props.data.map((nome, index) => {
//           if (index != 0) {
//             return (
//               <MiniCardHorizantal key={index} day={nome.weekday} max={nome.max} min={nome.min} condition={nome.condition} ></MiniCardHorizantal>
//             );
//           }
//           return null;
//         })}
//       </View>
//     </ScrollView>
//   );
// };



// export default Cardbottom;


import React from 'react';
import {View, Text, Image, ScrollView } from 'react-native';
import MiniCardHorizantal from './minicardhorizontal';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

const Cardbottom = (props) => {

  var color = props.color;

  return (

    <ScrollView style={[styles.card, { backgroundColor: color }]}>
 
      
      <View style={[styles.card, { backgroundColor: color }]}>
      <View style={{ width: "100%", fekx: 1, flexDirection: "row" }}>
        <View style={{ width: "50%" }}><Text style={styles.description}>NextForecast</Text></View>
        <View style={{ width: "50%" }}><Text style={styles.description1}> <Entypo name="calendar" size={24} color="#ffffff" /></Text></View>
      </View>
     
      {props.data.map((nome, index) => {
          if (index != 0) {
            return (
              <MiniCardHorizantal key={index} day={nome.weekday} max={nome.max} min={nome.min} condition={nome.condition} ></MiniCardHorizantal>
            );
          }
          return null;
        })}
      

    </View>
      
    </ScrollView>
  );
};



export default Cardbottom;