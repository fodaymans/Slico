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
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import Loader from './Components/Loader';
import Loader from '../Constant/loader';
import { useSelector } from "react-redux";
// import { selectUser } from '../reduxSlice/userSlice';
import { selectUser } from '../Redux/userSlice';
// import { selectAuth } from '../reduxSlice/authSlice';
import { useRoute } from '@react-navigation/native';



import styles,{
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,

} from '../Styles/VerificationStyle';


  
////////
const {Value, Text: AnimatedText} = Animated;

  const CELL_COUNT = 6;
  const source = {
    uri:
      'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
  };
  
  

  
  
  const EmailVerificationScreen = ({route,navigation}) => {  

    const [verification, setCode] = useState('');

    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
    // const [email, setEmail] = useState('mansray0@gmail.com');
  
  
    const user = useSelector(selectUser);
  
  
   const  { userEmail} = route.params;
    const [email, setEmail] = useState(userEmail);
  
  
    console.log(email)
    
  
   



    
    const [value, setValue] = useState(null);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
  
  
    
    


    const handleResend = () => {

     
  
   

        

      
      
  
      //check for email
  
      
        setLoading(true);
        fetch(`http://slico.icgs.xyz/api/Marketer/verify`, {
          method: 'PUT',
         
          headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    
    
        
    
          body: JSON.stringify({
            // VerificationCode: value,
    
            
              Email:  email
            
          }),
    
        
    
        })
          .then((response) => response.json())
          .then((res) => {
            //Hide Loader
            setLoading(false);
            console.log(res);
          
            if (res == 'verification code sent') {
              alert("Please check your email for your verification code");
              return; 
          
            }
            
            
          
    
          
            
            else {
              setErrortext('code not sent');
            }
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
    
      }
  
  
  
  
    
  
  
  
  
  
    const handleSubmitButton = () => {
  
  
     
  
     
      
  
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
  
          
            Email:  email
          
        }),
  
      
  
      })
        .then((response) => response.json())
        .then((res) => {
          //Hide Loader
          setLoading(false);
          console.log(res);
        
        
          if (res == 'verified') {
        
            navigation.navigate('LoginScreen');
          //   console.log(responseJson);
          };
          
          
          if (res == 'Invalid verification Code') {
          //   console.log(responseJson);
            setErrortext('Verification Code not Correct');
            alert("Verification Code not Correct");
            return; 
          };
  
        
          
       
        })
        .catch((error) => {
          //Hide Loader
          setLoading(false);
          console.error(error);
        });
  
      }
  
  
      //check for email
  
     


  
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


{/* <TextInput
              style={styles.textInput}
              onChangeText={(verification) => setCode(verification)}
              underlineColorAndroid="#f000"
              placeholder="Code"
              autoCapitalize="sentences"
              returnKeyType="next"
             

            /> */}


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



  
  export default EmailVerificationScreen;