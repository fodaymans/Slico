import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import 'react-native-gesture-handler';

// Import React and Component
import { Text,StyleSheet, SafeAreaView,Image,FlatList,Dimensions,Alert} from 'react-native';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

import {PersistGate} from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreenCustomer from './HomeScreenCustomer';
import CustomerProfileScreen from './CustomerProfile';
import HelpScreen from './HelpScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HelpStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreenCustomer = () => (





  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#1bb4bf',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
 
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />



<Tab.Screen
      name="Help"
      component={HelpStackScreen}
      options={{
        tabBarLabel: 'Help',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-chatbox" color={color} size={26} />
        ),
      }}
    />
   
  </Tab.Navigator>
);



export default MainTabScreenCustomer;






const HomeStackScreen = ({navigation}) => {

    const user = useSelector(selectUser);

  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Activity"
        component={HomeScreenCustomer}
        options={{
          title: 'SLICO',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              {/* <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                
              /> */}


<TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                {/* <Avatar.Image
                 source={{ uri: user.User_Photo }}
                  size={30}
                /> */}
                 <Image  style={styles.photo}
                     source={{uri:"https://mmlrim.com/wp-content/uploads/2017/03/78-785827_user-profile-avatar-login-account-male-user-icon.png" }}  
                     
                      />

{/* <Image  style={styles.photo}
                     source={{uri:user.User_Photo }}  
                     
                      /> */}
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{  marginTop: 10}}>
              <Icon.Button
                name="power"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {
                    // props.navigation.toggleDrawer();
                    Alert.alert(
                      "Logout",
                      "Are you sure? You want to logout?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => {
                            return null;
                          },
                        },
                        {
                          text: "Confirm",
                          onPress: () => {
                            //    dispatch(logout()).catch((err)=>alert(err.message))
                            AsyncStorage.clear('');
                            // dispatch(logout());
                            navigation.replace("Auth");
                          },
                          // onPress : handleLogout()
                        },
                      ],
                      { cancelable: false }
                    )
                }}
              />
                       


              <TouchableOpacity
                style={{marginTop: 10}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
               
                 {/* <Image  style={styles.photo}
                     source={{uri:user.Photo }}  
                    
                      /> */}
              </TouchableOpacity>
            </View>
          ),
        }}
      />




    </HomeStack.Navigator>
  );
};





const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

      <ProfileStack.Screen
        name="Profile"
        component={CustomerProfileScreen}
       
      />
    
    </ProfileStack.Navigator>
  );
};




const HelpStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <HelpStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
       
      />
    
    </HelpStack.Navigator>
  );
};



const styles = StyleSheet.create({
   
    photo: {
      width: 22,
      height:20,
      borderRadius: 15,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    title: {
      flex: 1,
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#444444',
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
    },
    category: {
      marginTop: 5,
      marginBottom: 5
    }
  });
  
  