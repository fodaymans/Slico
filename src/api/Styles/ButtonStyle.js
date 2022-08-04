import React, {useState, createRef,useEffect} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  Image,
  Alert,KeyboardAvoidingView, ScrollView
} from 'react-native';
import { alignContent, margin } from 'styled-system';
import { flex } from 'styled-system';




const ButtonStyle = StyleSheet.create({
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#0CAC8C',
        alignItems: 'center',
        marginTop: 10,
      },

      button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#007AFF',
        margin: 10,
        marginLeft: 40,
        marginRight: 40
      },

      button1: {
        borderRadius: 1,
        backgroundColor: '#007AFF',
        // marginTop: 30,
        margin: 1,
        width:'60%',
        marginTop:1,
        padding:2,
        alignSelf : 'center',
        marginLeft: 1
        
      },

      buttonSave: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#7DE24E',
        margin: 10,
        marginLeft: 40,
        marginRight: 40
      },

      buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
      },

      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },


      buttonStyle1: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: '#000',
        borderColor: '#7DE24E',
        height: 50,
     
      
       
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },

      buttonContainer: {
        // margin: 20,
       backgroundColor:'white',
        flexDirection: 'row',
        alignContent: 'center'
      },

      alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        justifyContent: 'center'
      },

      buttonStyle: {
        backgroundColor: '#0CAC8C',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },

      buttonStyle2: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#000',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },


      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
   
    
  });

  export default ButtonStyle;