import React from 'react';
import { View,Button ,TouchableOpacity,StyleSheet,Text} from 'react-native';
import colors from '../../config/colors';


function AppButton({ title, onPress, color = "primary" }) {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors[color] }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      // borderRadius: 25,
      // justifyContent: "center",
      // alignItems: "center",
      // padding: 15,
      // width: "100%",
      // marginVertical: 10,

      backgroundColor: colors.primary,
     
     
      alignItems: "center",
      padding: 15,
    
      marginVertical: 10,
      borderWidth: 0,
      // color: '#FFFFFF',
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
      
    },
    text: {
      color: colors.white,
      fontSize: 18,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });
  
  export default AppButton;
  