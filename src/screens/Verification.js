// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import { 
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Animated, Image, SafeAreaView,
  Alert
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';
import Loader from '../Constant/loader';
import { useSelector } from "react-redux";
import { selectUser } from '../Redux/userSlice';
import { useRoute } from '@react-navigation/native';





  
////////
const {Value, Text: AnimatedText} = Animated;

  const CELL_COUNT = 6;
  const source = {
    uri:
      'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
  };
  
  

  
  
  const VerificationScreen = ({route,navigation}) => {  

    const [verification, setCode] = useState('');

    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
    // const [email, setEmail] = useState('mansray0@gmail.com');
  
  
    const user = useSelector(selectUser);
  
  
   const  { pass} = route.params;
  //  const  { userEmail} = route.params;
  
  
  
      const [data, setData] = useState(pass);
   
  
    // const [email, setEmail] = useState(userEmail);
  
  
    console.log(data)
    // console.log(email)
    
  
   



    
    const [value, setValue] = useState(null);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
    const handleResend = () => {

        setLoading(true);

        fetch(`http://slico.icgs.xyz/api/Marketer/resendCode`, {
        method: 'PUT',
       
        headers: {
          //Header Defination
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  
  
      
  
        body: JSON.stringify({
       
  
          
          MarketerID:  data
          
        })
  
      
  
      })
        .then((response) => response.json())
        .then((res) => {
          //Hide Loader
          setLoading(false);
          console.log(res);
        
          // If server response message same as Data Matched
          if (res == "verification code sent") {
            alert("Please check your email for your verification code")
            return;
        
          }
          
          else {
            alert("code not sent");
          };
        })


        .catch((error) => {
          //Hide Loader
          setLoading(false);
          console.error(error);
        });
  
      }
  
  
      //check for email
  
   
  
  

  
  
  
  
  
    const handleSubmitButton = () => {
  
  
      setErrortext('');
      if (!value) {
        alert('Please Enter Verification Code');
        return;
      };
     
  
  
      //Show Loader
      setLoading(true);
  
    
   
        fetch(`http://slico.icgs.xyz/api/Marketer/verify`, {
          method: 'PUT',
         
          headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    
    
        
    
          body: JSON.stringify({
            VerificationCode: value,
    
            
            MarketerID:  data
            
          }),
    
        
    
        })
          .then((response) => response.json())
          .then((res) => {
            //Hide Loader
            setLoading(false);
            console.log(res);
          
            // If server response message same as Data Matched
            if (res == 'verified') {
            //   setIsRegistraionSuccess(true);
              //  dispatch(authlogout());
              navigation.navigate('LoginScreen');
            //   console.log(responseJson);
            };
            
            
            if (res == 'Invalid verification Code') {
            //   console.log(responseJson);
              setErrortext('Verification Code not Correct');
              alert("Verification Code not Correct");
              return; 
            };
    
          
            
            // else {
            //   setErrortext('Registration Unsuccessful');
            // }
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
    
      }
  
  
  


  
    return (



    


      // <SafeAreaView style={styles.root}>

<KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >


<ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Verification</Text>
        <Image style={styles.icon} source={source} />
        <Text style={styles.subTitle}>
          Please enter the verification code{'\n'}
          we send to your email address
        </Text>




        <Loader loading={loading} />
  
        <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />




        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}  
           onPress={handleSubmitButton}

          >Verify</Text>



          
        </View>


      
        <Text
               style={styles.registerTextStyle}
              onPress={handleResend}>
            Resend Code
            </Text>
  

</ScrollView>

      </KeyboardAvoidingView>
    );
  };



  
  export default VerificationScreen;