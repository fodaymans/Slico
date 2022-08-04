import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from "moment";
export default function CustomDatePicker({onChange,format,minimumDate,maximumDate,value,style}) {
    return (


        <View>

          
<DateTimePicker
        testID="dateTimePicker"
        value={value}
        mode="date"
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        // is24Hour={true}
        format={format}
        display="default"
        onChange={onChange}
        />


        </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
    borderColor : "#000",
    borderRadius : 23,
    padding :10,
    paddingBottom: 10,
    width : '50%',
    margin: 10,
    borderWidth :1,
    paddingRight: 15
  }


});

