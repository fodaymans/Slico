
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { alignContent } from 'styled-system';




const styles = StyleSheet.create({
    container: {
flex: 1, 
// backgroundColor: "#AAAAAA" 
    
    },


    dateAlign:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' // if you want to fill rows left to right
          },


          item: {
            width: '60%' // is 50% of container width
          },

    
    sliderContainer: {
      height: 200,
      width: "90%",
      marginTop: 10,
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 8,
    },
  
    bgImage:{
      flex: 1,
     
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
      borderRadius: 8,
    },
    sliderImage: {
      height: "100%",
      width: "100%",
      alignSelf: "center",
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: "row",
      width: "90%",
      alignSelf: "center",
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: "30%",
      marginHorizontal: 0,
      alignSelf: "center",
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      width: 70,
      height: 70,
      backgroundColor: "#dbdbdb" /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: "center",
      marginTop: 5,
      color: "#1bb4bf",
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

   


    card4: {
      height: 90,
      marginVertical: 10,
      flexDirection: "row",
      shadowColor: "#999",
      backgroundColor:'#000',
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

    item: {
      width: '30%', // is 50% of container width
      alignContent: 'center',
      alignSelf: 'center',
      alignContent: 'center'
    },


    cardInfo2: {
      flex: 2,
      padding: 10,
      borderColor: "#1bb4bf",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: "#fff",
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

    cardInfo1: {
      flex: 2,
      padding: 10,
      borderColor: "#1f65ff",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 1,
      borderTopRightRadius: 8,
      backgroundColor: "#fff",
      
    },


    card3: {
      height: 130,
      marginVertical: 5,
      flexDirection: "row",
      shadowColor: "#999",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },



    cardTitle: {
      fontWeight: "bold",
    },
  
    cardTitle1: {
      fontWeight: "bold",
      fontSize: 20,
      alignContent:'center'
    },
  
    cardTitle3: {
      fontWeight: "bold",
      fontSize: 15,
      alignContent:'center'
        },
  
  
    cardDetails: {
      fontSize: 12,
      color: "#444",
    },

    cardDetails4: {
      fontSize: 15,
      color: "#444",
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily:'Arial',
      fontWeight:'bold',
      marginBottom: 9
    },



    cardDetails1: {
      fontSize: 12,
      color: "green",
    },

    cardDetails2: {
      fontSize: 12,
      color: "red",
    },
  

       textInput: {
        // color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
      marginLeft:10,
      padding:5,
      alignSelf:'center',
        borderWidth: 1,
        // borderRadius: 50,
        borderColor: '#dadae8',
      },

      textInput1: {
        // color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
      marginLeft:10,
      padding:1,
      paddingBottom: 5,
      alignSelf:'center',
        // borderWidth: 1,
        // borderRadius: 50,
        // borderColor: '#dadae8',
      },
  
  
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: '600',
    },
    modalText: {
      fontSize: 18,
      color: '#555',
      marginTop: 14,
      textAlign: 'center',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
  
  
  
  });
export default styles;  