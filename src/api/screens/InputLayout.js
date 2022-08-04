import React from "react";
import { View, Text, Image ,KeyboardAvoidingView,StyleSheet} from "react-native";

import { FONTS, SIZES, COLORS, icons, images } from "../Constant";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function InputLayout({
  title,
  subtitle,
  titleContainerStyle,
  children,
}) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* <Text></Text> */}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
{/* 
<KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.mainBody}
  > */}

{/* <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}> */}

       

        {/* title */}

        {/* <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>

        
        </View> */}



        {children}


        {/* </ScrollView> */}

        {/* </KeyboardAvoidingView> */}
      </KeyboardAwareScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: '#FFF',
     
    },
  
    container: {
      flex: 1,
    },
  
  
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
  
    SectionStyle: {
     
  
  
  
      flexDirection: 'row',
      marginTop: 20,
      // marginBottom: 10,
    
      margin: 15,
      paddingBottom: 5,
    
      height: 50
  
  
  
  
    },
  
  
    errorTextStyle: {
      color: "red",
      textAlign: "center",
      fontSize: 24,
    },
  
  
  
    bgImage:{
      flex: 1,
    
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    forgot:{
      color:"white",
      fontSize:11
    },
  
  
  
    action: {
      flexDirection: 'row',
      marginTop: 20,
      // marginBottom: 10,
    
      margin: 15,
      paddingBottom: 5,
    
      height: 50
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      // marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      fontSize : 25,
      borderColor : "#000",
      // borderRadius : 23,
      height: 50,
      borderWidth :1,
      backgroundColor: '#ffffff',
     
      paddingRight: 15
    },
  
  
  
  
    inputText:{
     
  
  
  
      flex: 1,
      // marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      fontSize : 25,
      borderColor : "#000",
      borderRadius : 23,
      height: 70,
      borderWidth :3,
      backgroundColor: '#ffffff',
     
      paddingRight: 15
    
    },
  
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
  
   
    buttonStyle: {
      backgroundColor: 'blue',
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
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
  
  
    inputText:{
      height:50,
      color:"white",
      width : "100%",
      flex: 1,
      alignItems: 'stretch'
  
    },
  
  
    registerTextStyle: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
  
    registerTextStyle1: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 5,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 24,
    },
  });
