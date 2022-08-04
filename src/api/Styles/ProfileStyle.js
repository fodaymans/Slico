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
import colors from '../config/colors';




const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#FFF',
      borderWidth: 0,
      flex: 1,
      margin: 0,
      padding: 0,
    },
    container: {
      flex: 1,
      backgroundColor: colors.white

    },
    emailContainer: {
      backgroundColor: '#FFF',
      flex: 1,
      paddingTop: 30,
    },
    headerBackgroundImage: {
      paddingBottom: 20,
      paddingTop: 35,
    },
    headerContainer: {

      
    },
    headerColumn: {
      backgroundColor: '#fff',
      ...Platform.select({
        ios: {
          alignItems: 'center',
          elevation: 1,
          marginTop: -1,
        },
        android: {
          alignItems: 'center',
          padding: 30
        },
      }),
    },


    // headerContainer1: {},
    // headerColumn1: {
    //   backgroundColor: '#000',
    //   ...Platform.select({
    //     ios: {
    //       alignItems: 'center',
    //       elevation: 1,
    //       marginTop: 30,
    //     },
    //     android: {
    //       alignItems: 'center',
    //       marginTop: 10,
    //       paddingTop:20,
    //     },
    //   }),
    // },

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

      errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 24,
      },


      errorTextStyle1: {
        color: "green",
        textAlign: "center",
        fontSize: 24,
      },



      card1: {
        height: 80,
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



      cardInfo1: {
        flex: 2,
        padding: 10,
        borderColor: "#fff",
     
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
      },

      cardInfo2: {
        flex: 1,
        padding: 10,
        borderColor: "#fff",
        borderWidth: 1,
        borderLeftWidth: 0,
        marginLeft : 20,
        marginRight : 20,
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
        fontSize: 20,
        color: "#000",
        padding: 10,
        paddingBottom:5
      },
    
    
    
      modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },


    placeIcon: {
      color: 'white',
      fontSize: 26,
    },
    scroll: {
      backgroundColor: '#FFF',
    },
    telContainer: {
      backgroundColor: '#FFF',
      flex: 1,
      paddingTop: 30,
    },
    userAddressRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    userCityRow: {
      backgroundColor: 'transparent',
    },
    userCityText: {
      color: '#A5A5A5',
      marginTop: 25,
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    userImage: {
      // borderColor: mainColor,
      borderRadius: 85,
      borderWidth: 3,
      height: 170,
      marginBottom: 15,
      width: 170,
    },
    userNameText: {
      color: '#000',
      fontSize: 22,
      fontWeight: 'bold',
      paddingBottom: 8,
      textAlign: 'center',
    },
  })


  export default styles;