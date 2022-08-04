import React, {useState, createRef,useEffect} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  Dimensions,
  StyleSheet ,
  Image,
  Alert,KeyboardAvoidingView, ScrollView
} from 'react-native';
import colors from '../config/colors';

const {width, height} = Dimensions.get("screen");



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },

    inputContainer:{
      marginVertical: 30
    },
    
    input :{
      borderColor : "black",
      borderWidth: 1,
      width : width / 1.3,
      padding: 10

    },


    inputBox: {
      // position: 'absolute',
      marginTop: Platform.OS === 'ios' ? 40 : 20,
      flexDirection: 'row',
      borderColor: '#B2EBF2',
      backgroundColor: '#fff',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 5,
      borderWidth: 1.5,
      height: height / 16,
    },
   
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },


    textBox : {
      flex: 1,
      // marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      // color: '#05375a',
      fontSize : 25,
      width :'90%',
      marginLeft: 15,
      marginEnd: 10,
      borderColor : colors.medium,
      borderRadius : 100,
      height: 50,
      marginTop: 10,
      borderWidth :1,
      // backgroundColor: '#ffffff',
      paddingRight: 15
    },


    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    
    action: {
      flexDirection: 'row',
      marginTop: 10,
      margin:15,
      borderColor : '#4B6EAF',
      marginBottom: 10,
      borderBottomWidth: 3,
      // borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },


    // action: {
    //   flexDirection: 'row',
    //   marginTop: 20,
    //   // marginBottom: 10,
    
    //   margin: 15,
    //   paddingBottom: 5,
    
    //   height: 50
    // },


    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },

    errorTextStyle1: {
      color: "red",
      textAlign: "center",
      fontSize: 18,
    },
  

    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },

    header: {
        paddingTop: 30,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
     
    
       
      },
      footer: {
        flex: Platform.OS === "ios" ? 3 : 5,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      text_header: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 30,
      },

    // textInput: {
    //   flex: 1,
    //   marginTop: Platform.OS === 'ios' ? 0 : -12,
    //   paddingLeft: 10,
    //   color: '#05375a',
    // },

    textInput: {
        flex: 1,
        // color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
      
        borderWidth: 1,
        // borderRadius: 50,
        borderColor: '#dadae8',
      },

      


      textInput1: {
        flex: 1,
        color: 'green',
        paddingLeft: 15,
        paddingRight: 15,
     
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#dadae8',
      },

      bgImage:{
        flex: 1,
      
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      },

      cardsWrapper: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
      },
      card: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
      },
      cardTitle: {
        fontWeight: "bold",
      },
    
      cardTitle1: {
        fontWeight: "bold",
        fontSize: 20,
        alignContent:'center'
      },
    
    
      cardDetails: {
        fontSize: 12,
        color: "#444",
      },
    

    
  });

  export default styles;