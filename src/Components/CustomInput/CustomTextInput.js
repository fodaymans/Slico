import React from 'react';
import { TextInput, View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../config/colors';
import defaultStyles from "../../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>


      
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.black}
      
        style={styles.textBox}
       
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
   
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },


  textBox : {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize : 15,
    borderColor : colors.medium,
    // borderRadius : 23,
    height: 50,
    borderWidth :1,
    backgroundColor: '#ffffff',
    paddingRight: 15
  }


});

export default AppTextInput;


