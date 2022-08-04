
import React, {useState, useEffect} from 'react';
import { 
  View, 
  
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Image
} from 'react-native';

import { selectUser } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const user = useSelector(selectUser);
  const { colors } = useTheme();



  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);



      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'MainScreen' ),
      );


    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#013220"/>
 

    <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/icl.png')}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>



            


   
    



<ActivityIndicator
      animating={animating}
      color="#FFFFFF"
      size="large"
      style={styles.activityIndicator}
    />
  </View>
);
};


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
},


registerTextStyle: {
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
  alignSelf: 'center',
  padding: 10,
},

registerTextStyle1: {
  color: 'blue',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  alignSelf: 'center',
  padding: 10,
},

activityIndicator: {
  alignItems: "center",
  height: 80,
},



});



export default SplashScreen;

