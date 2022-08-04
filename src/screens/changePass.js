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
  Animated,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';
import Loader from '../Constant/loader';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import {useRoute} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import {UserAPI} from '../api/services';
import {FONTS, SIZES, COLORS, icons} from '../Constant';

import {FormInput, TextButton} from '../Components';
import AuthLayout from './AuthLayout';
// import styles,{
//     ACTIVE_CELL_BG_COLOR,
//     CELL_BORDER_RADIUS,
//     CELL_SIZE,
//     DEFAULT_CELL_BG_COLOR,
//     NOT_EMPTY_CELL_BG_COLOR,

// } from '../Styles/VerificationStyle';

////////
const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 6;
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const ChangePasswordScreen = ({route, navigation}) => {
  const [verification, setCode] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  // const [email, setEmail] = useState('mansray0@gmail.com');
  const {colors} = useTheme();
  const user = useSelector(selectUser);
  const {pass} = route.params;
  //  const  { userEmail} = route.params;
  const [mid, setData] = useState(pass);
  const [password, setPassword] = useState('');
  const [confpassword, setCPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  console.log('marketer id', mid);

  const [value, setValue] = useState(null);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //check for email

  const handleSubmitButton = () => {
    setErrortext('');
    if (!password) {
      alert('Please Enter Password ');
      return;
    }

    if (!confpassword) {
      alert('Please Confirm Password ');
      return;
    }

    if (confpassword != password) {
      alert('Password does not match');
      return;
    }

    setLoading(true);
    UserAPI.changePassWord({mid, password})
      .then(function (response) {
        // response handling
        // setLoading(false);

        if (response.data == 'Password Changed') console.log(response.data);
        alert('Password Changed Successfully');
        navigation.navigate('LoginScreen');
      })
      .catch(function (error) {
        if (error.request) {
          alert(error);

          setLoading(false);
        }
      });

    //Show Loader
    // setLoading(true);

    //   fetch(`http://slico.icgs.xyz/api/Marketer/changePass`, {
    //     method: 'PUT',

    //     headers: {
    //       //Header Defination
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },

    //     body: JSON.stringify({
    //       Password: password,

    //         MarketerID:  data

    //     }),

    //   })
    //     .then((response) => response.json())
    //     .then((res) => {
    //       //Hide Loader
    //       setLoading(false);
    //       console.log(res);
    //       if (res == 'Password Changed') {
    //         alert("Password Changed Successfully")
    //         navigation.navigate('LoginScreen');
    //       };

    //     })
    //     .catch((error) => {
    //       //Hide Loader
    //       setLoading(false);
    //       console.error(error);
    //     });
  };

  return (
    <AuthLayout
      title="Change Password"
      subtitle="Sierra Leone Insurance Company">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}>
        <Loader loading={loading} />


        {/* <Text>{mid}</Text> */}

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          placeholder="Password"
          onChange={value => {
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.green,
                }}
              />
            </TouchableOpacity>
          }
        />

        <FormInput
          label="Confirm Password"
          secureTextEntry={!showPass}
          placeholder="Confrim Password"
          onChange={confpassword => setCPassword(confpassword)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.green,
                }}
              />
            </TouchableOpacity>
          }
        />

        <TouchableOpacity
          onPress={handleSubmitButton}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </AuthLayout>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },

  SectionStyle: {
    // flexDirection: 'row',
    // borderRadius:25,
    // backgroundColor:"#778899",
    // height: 40,
    // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    // margin: 10,

    flexDirection: 'row',
    marginTop: 20,
    // marginBottom: 10,

    margin: 15,
    paddingBottom: 5,

    height: 50,
  },

  title: {
    fontSize: 22,
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 24,
  },

  bgImage: {
    flex: 1,

    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },

  action: {
    flexDirection: 'row',
    marginTop: 20,
    // marginBottom: 10,

    margin: 15,
    paddingBottom: 5,

    height: 50,
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
    fontSize: 25,
    borderColor: '#000',
    borderRadius: 23,
    height: 50,
    borderWidth: 3,
    backgroundColor: '#ffffff',

    paddingRight: 15,
  },

  inputText: {
    // height:50,
    // color:"white",
    // textAlign:'center'

    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 25,
    borderColor: '#000',
    borderRadius: 23,
    height: 70,
    borderWidth: 3,
    backgroundColor: '#ffffff',

    paddingRight: 15,
  },

  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
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

  inputText: {
    height: 50,
    color: 'white',
    width: '100%',
    flex: 1,
    alignItems: 'stretch',
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
