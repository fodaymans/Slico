// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect, createRef } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
Image,
  TextInput,
  Platform,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Loader from '../Constant/loader';
import styles from '../Styles/TextInput';
import ButtonStyle from '../Styles/ButtonStyle';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import AppTextInput from '../Components/CustomInput/CustomTextInput';
import InputLayout from './InputLayout';
import { FONTS, SIZES, COLORS, icons } from '../Constant';
import { FormInput, TextButton } from '../Components';
import { Radio, Center, NativeBaseProvider } from "native-base";




const RegisterScreen = ({ navigation,props }) => {
  const [userName, setUserName] = useState('');
 
  const [userEmail, setUserEmail] = useState('');
  const [val, setvalue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const [UserGroup, setUsergroup] = useState('Marketer');
  const [UserPassword, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [MiddleName, setMiddlename] = useState();

  var fn;
  var ln;
  const [FName, setFname] = useState();
  const [LName, setLname] = useState();
  const [id, setid] = useState();

  const [Telephone, setTelephone] = useState('');
  const [marketerid, setmarketetID] = useState('');
  const [market, setMarket] = useState('');
  const [shouldShowError, setshouldShowError] = useState(false);

  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShowbutton, setShouldShowButton] = useState(false);

  const window = Dimensions.get('window');




  const handleSearchPress = () => {
    setErrortext('');
    if (!marketerid) {
      alert('Please Enter Marketer ID');
      return;
    }
  
  
   
    setLoading(true);
  
     
  
  
 
    setTimeout(() => { fetch(`http://portal.slicoinsurance.com/slicoapi/api/Marketer/getDetails?id=${marketerid}`, {
      method: 'POST',
     
      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        marketerid: marketerid,
        
       
    
      })
  
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
     
      
                setvalue(responseJson)
             
  
  
  
             if(responseJson[0].MarketerID != null){
              setShouldShow(true)
              setShouldShowButton(true)
              setshouldShowError(false)
          //  setmarketetID = responseJson[0].MarketerID
           setFname (responseJson[0].Firstname)
          setLname (responseJson[0].Lastname)

           setTelephone (responseJson[0].Telephone)
           setMiddlename (responseJson[0].Middlename)
           setid  (responseJson[0].MarketerID)
           return;
       
              }
              else{
                setShouldShow(false)
                setShouldShowButton(false)
                setshouldShowError(false)

              }
  
3
  
       

        if(responseJson ==="Already Gegistered"){
          // alert("Username / Password incorrect");
          setshouldShowError(true)

         
            return;
      }
        
        
        if(responseJson ==="Invalid ID"){
          setErrortext("Invalid Marketer ID");
          setshouldShowError(false)
         
            return;
      }
  
        // setErrortext('');
  
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  
    }, 5000);
  
    
    }
  
  
  






  const handleSubmitPress = () => {
    setErrortext('');


    if (!userName) {
      alert("Please Enter Username");
      return;
    };

    if (!userEmail) {
      alert("Please Enter Email");
      return;
    };

    if (!FName) {
      alert("Please Enter First Name");
      return;
    };

    if (!LName) {
      alert("Please Enter Last Name");
      return;
    };


    if (!Telephone) {
      alert("Please Enter Phone");
      return;
    };



    if (!UserPassword) {
      alert("Please Enter Password");
      return;
    };


 


    // Show Loader
    setLoading(true);
   
    setTimeout(() => {
 
       fetch('http://portal.slicoinsurance.com/slicoapi/api/Marketer/register', {
      method: 'POST',

      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        Username: userName,
        Email: userEmail,
        FirstName: FName,
        MiddleName: MiddleName,
        LastName: LName,
        Telephone: Telephone,
        MarketerID: id,
        Password: UserPassword
        // UserGroup: UserGroup



      })

    })
  
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
      


        if (responseJson == 'Username already registered') {
          
          // alert('Username not registered in our system');
            setErrortext(responseJson);
          return;
        };


        if (responseJson == 'Email already registered') {
          
          // alert('email registered in our system');
          setErrortext(responseJson);
          return;
        };


        if (responseJson == 'Marketer ID already registered') {
          
          setErrortext("Marketer ID already exist");
          return;
          console.log(responseJson);
        };

        if (responseJson == "Success") {
            alert('Registration Successful');
          navigation.replace('LoginScreen');
          return;

          console.log(responseJson)
        };


      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        // console.error(error);
      });

    }, 5000);

  };





  return (

    // <View style={styles.container}>

    <InputLayout>


                <Loader loading={loading} />

       {/* <View style={styles.header}>
        <Text style={styles.text_header}>Register </Text>


      

      </View> */}

      
      {errortext != "" ? (
              <Text style={styles.errorTextStyle1}> {errortext} </Text>
            ) : null}


        {/* <View style={styles.action}>

          <TextInput
            style={styles.textInput}
            onChangeText={(marketerid) => setmarketetID(marketerid)}
            placeholder="ID "
            underlineColorAndroid="#f000"
            autoCapitalize="none"
            returnKeyType="done"
         
            placeholderTextColor="#000"
            underlineColorAndroid="#f000"
      
          /> */}


<FormInput
          label="Enter Marketer ID To Register"
          placeholder=" Marketer ID "
          onChange={(marketerid) => setmarketetID(marketerid)}

         
        />



          

{/* </View> */}

{/* 
<TouchableOpacity
            onPress={handleSearchPress}
            style={ButtonStyle.buttonStyle2}
          >

            <  Text style={styles.buttonTextStyle}>Verify ID</Text>

          </TouchableOpacity> */}


          
<TextButton
label="Verify"
buttonContainerStyle={{
    height:55,
    width: 200,
    alignSelf:'center',
    alignItems: 'center',
    marginTop: SIZES.padding,
    borderRadius : SIZES.radius,
    backgroundColor :  COLORS.darkBlue 
}}
onPress={handleSearchPress}

></TextButton>


          {shouldShowError ? (
          <View style={styles.card}>

<View style={styles.cardInfo}>
<Text style={styles.cardTitle}>MARKETER ALREADY REGISTERED </Text>


  
 

</View>
</View> 
 ) : null} 



          {shouldShow ? (

             

            <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView enabled>




    

          {/* <AppTextInput
            onChangeText={(id) => setid(id)}
            placeholder="Marketer ID"
            underlineColorAndroid="#f000"
            autoCapitalize="none"
            returnKeyType="done"
            value={id}
            editable={false}
      
          /> */}


<FormInput
          label="Marketer ID"
          placeholder="Marketer ID"
          onChange={(id) => setid(id)}
          value={id}
          editable={false}
         
        />


 
{/* 
<AppTextInput
  onChangeText={(FName) => setFname(FName)}
 
  placeholder="First Name"
 value={FName}
  editable={false}
  autoCapitalize="none"
  returnKeyType="done"


/> */}



<FormInput
          label="First Name"
          placeholder="First Name"
          onChange={(FName) => setFname(FName)}
          value={FName}
         
        />


<FormInput
          label="Middle Name"
          placeholder="First Name"
          onChange={(MiddleName) => setMiddlename(MiddleName)}
          value={MiddleName}
         
        />


{/* 
<AppTextInput
  onChangeText={(MiddleName) => setMiddlename(MiddleName)}
  placeholder="Enter Middle Name"
  // editable={false}
  value={MiddleName}
  returnKeyType="done"

  underlineColorAndroid="#f000"

/> */}



<FormInput
          label="Last Name"
          placeholder="First Name"
          onChange={(LName) => setLname(LName)}
          value={LName}
         
        />


{/* 
<AppTextInput
  onChangeText={(LName) => setLname(LName)}
  placeholder="Last Name"
  placeholderTextColor="#fff"
  value={LName}
  editable={false}
  returnKeyType="done"


/> */}





<FormInput
          label="Telephone"
          placeholder="Phone"
          keyboardType="numeric"

          onChange={(Telephone) => setTelephone(Telephone)}
          value={Telephone}
         
        />



{/* 
<AppTextInput
  onChangeText={(Telephone) => setTelephone(Telephone)}
  placeholder="eg :076123456"
  value={Telephone}
  keyboardType="numeric"
  editable={false}
  autoCapitalize="none"
  returnKeyType="done"


/> */}






          {/* <AppTextInput
            onChangeText={(userName) => setUserName(userName)}
            placeholder="Username"
            autoCapitalize="none"
            returnKeyType="done"
           
          /> */}



          
<FormInput
          label="Username"
          placeholder="Username"
          onChange={(userName) => setUserName(userName)}
         
        />







          {/* <AppTextInput
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            placeholder="Email"
            keyboardType="email-address"
            autoCompleteType="email"
          
            returnKeyType="done"
           
          /> */}


          
<FormInput
          label="Email"
          placeholder="Email"
          onChange={(userEmail) => setUserEmail(userEmail)}
          keyboardType="email-address"

         
        />



    
        

            {/* <AppTextInput
              onChangeText={(UserPassword) => setPassword(UserPassword)}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="done"

           
            /> */}


<FormInput
          label="Password"
          placeholder="Password"
          onChange={(UserPassword) => setPassword(UserPassword)}
          secureTextEntry={true}

         
        />
 


 <TouchableOpacity
            onPress={handleSubmitPress}
            style={ButtonStyle.buttonStyle2}
          >

            <  Text style={styles.buttonTextStyle}>Register</Text>

          </TouchableOpacity>

          </KeyboardAvoidingView>
       
       </ScrollView>

     
  



    

) : null}
   
   
                </InputLayout>

                

  );
};
export default RegisterScreen;

