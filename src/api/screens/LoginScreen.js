// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../Redux/userSlice';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import Loader from '../Constant/loader';
import {UserAPI} from '../api/services';
import SubmitButton from '../Components/Button/SubmitButton';
import Screen from '../Components/Screen';
import AppTextInput from '../Components/CustomInput/CustomTextInput';
import ErrorMessage from '../Components/ErrorMessage';

import {FONTS, SIZES, COLORS, icons} from '../Constant';

import {FormInput, TextButton} from '../Components';
import AuthLayout from './AuthLayout';

function LoginScreen({navigation, props}) {
  const {colors} = useTheme();

  const [isOffline, setOfflineStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [user, setUser] = useState(undefined);

  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);

  // const [storeEmail, setStore] = useState('');
  const dispatch = useDispatch();
  var pass = '';

  function isEnableSignIn() {
    return username != '' && password != '';
  }

  const handleSubmit = () => {
    if (!username) {
      alert('Please Enter Username');
      return;
    }
    if (!password) {
      alert('Please Enter Password');
      return;
    }

    setLoading(true);

    UserAPI.login({username, password})
      .then(function (response) {
        // response handling
        // setLoading(false);

        setUser(response.data);
        // console.log(response.data);
          const res = response.data[0];
          // console.log(res);
        pass = response.data[0].MarketerID;
        if (response.data == 'Invalid Username/password') {
          setLoading(false);
          alert('Invalid Username/Password');

          //  setLoginFailed(true);
          // setLoginFailed(false);
          return;
        }

        if (response.data[0].PassChange == 1) {
          navigation.navigate('change', {pass});
          return;
        }

        if (response.data[0].AccountStatus == 'DISABLED') {
          setLoading(false);

          alert('YOUR ACCOUNT HAS BEEN DISABLED');
          return;
        }

        if (response.data[0].AccountStatus == 'ENABLED') {
          AsyncStorage.setItem('user_id', JSON.stringify(res));
          dispatch(login(res));

          navigation.replace('MainScreen');
          return;
        }
      })
      .catch(function (error) {
        if (error.request) {
          alert(error);

          setLoading(false);
        }
      });
  };

  return (
    <AuthLayout title="Sign In" subtitle="Sierra Leone Insurance Company">
          <StatusBar barStyle="light-content" backgroundColor="#013220"/>

      {/* <View
      style={{
        flex: 1,
        marginTop: SIZES.padding * 2,
      }}
    > */}

      {/* <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.mainBody}
  > */}

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}>
        <Loader loading={loading} />

        <FormInput
          label="User ID"
          placeholder="User ID"
          onChange={value => {
            setUsername(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.correct}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.green,
                }}
              />
            </View>
          }
        />

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

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          {/* <Text>Customer Login</Text> */}

          <TextButton
            label="Customer Login"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('LoginScreenCustomer')}
          />

          {/* Marketer register */}

          <TextButton
            label="Marketer Register"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>

        <TextButton
          label="Sign In"
          // disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 
               COLORS.darkBlue
              
          }}
          onPress={handleSubmit}></TextButton>

        {/* {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null} */}

        {/* <ErrorMessage error="Invalid Username/Password" visible={loginFailed}/> */}
        {/* </KeyboardAvoidingView> */}
      </ScrollView>

      {/* </View> */}
    </AuthLayout>
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
    flexDirection: 'row',
    marginTop: 20,
    // marginBottom: 10,

    margin: 15,
    paddingBottom: 5,

    height: 50,
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
    // borderRadius : 23,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#ffffff',

    paddingRight: 15,
  },

  inputText: {
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

export default LoginScreen;
