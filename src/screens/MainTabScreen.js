import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';



import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Import React and Component
import { Text,StyleSheet, SafeAreaView,Image,FlatList,Dimensions,Alert} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {PersistGate} from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';

import { selectUser } from '../Redux/userSlice';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import AddCustomerScreen from './AddCustomer';
// import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native';
// import EditProfileScreen from './EditProfileScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditProfileScreen from './EditProfile';
import AddWitness from './AddWitness';
import CommissionScreen from './ViewCommission';
import { FirstScreenNavigator } from '../../App';
import OfflinEStorageScreen from './OfflinEStorageScreen';
import OfflineScreen from './OfflineScreen';

const HomeStack = createStackNavigator();
const WitnessStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const CommissionStack = createStackNavigator();
const OfflineStacks = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => (





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
      name="Customer"
      component={RegisterCustomerStack}
      options={{
        tabBarLabel: 'Register Customer',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-add-circle" color='black' size={26} />
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
      name="View Commission"
      component={CommissionStackScreen}
      options={{
        tabBarLabel: 'Commission',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-cash" color={color} size={26} />
        ),
      }}
    />



    
<Tab.Screen
      name="Offline"
      component={OfflineStack}
      options={{
        tabBarLabel: 'Offline',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-disc" color={color} size={26} />
        ),
      }}
    /> 

{/* 
<Tab.Screen
      name="Local"
     
      component={OfflineScreen}
      options={{
        headerShown:true,

          title : "Local Storage",
          headerTintColor : '#fff',
          headerStyle:{
              backgroundColor: '#001C7A'},
      //  headerShown : false
    

        tabBarLabel: 'Local Storage',
        tabBarColor: '#1f65ff',
       
        tabBarIcon: ({color}) => (
          <Icon name="ios-disc" color={color} size={26} />
        ),
      }}
    /> */}

   
  </Tab.Navigator>
);



export default MainTabScreen;






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
        component={HomeScreen}
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
            <View style={{  marginTop: 25}}>
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
                            AsyncStorage.clear();
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
                {/* <Avatar.Image
                 source={{ uri: user.User_Photo }}
                  size={30}
                /> */}
                 <Image  style={styles.photo}
                     source={{uri:user.User_Photo }}  
                      // style={{
                      //   width:width / 2,
                      //    height:width/2,
                      //    borderRadius:30,  
                      //   }}
                      // PlaceholderContent={<ActivityIndicator />}
                      />
              </TouchableOpacity>
            </View>
          ),
        }}
      />




    </HomeStack.Navigator>
  );
};

const RegisterCustomerStack = ({navigation}) => {
  const {colors} = useTheme();

  return (
  <RegisterStack.Navigator
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


    <RegisterStack.Screen
      name="Register Custom"
      component={FirstScreenNavigator}
      options={{
        headerShown: false
        // headerRight: () => (
        //     <View style={{marginRight: 10}}>
            
        // <TouchableOpacity
        //         style={{paddingHorizontal: 10, marginTop: 5}}
        //         onPress={() => {
        //           navigation.navigate('Profile');
        //         }}>
               
        //          <Image  style={styles.photo}
        //              source={{uri:"https://mmlrim.com/wp-content/uploads/2017/03/78-785827_user-profile-avatar-login-account-male-user-icon.png" }}  
                     
        //               />


        //       </TouchableOpacity>



        //     </View>
        //   ),
        
      }}
      
    />
  </RegisterStack.Navigator>
  )
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
        name="My Profile"
        component={EditProfileScreen}
       
      />
    
    </ProfileStack.Navigator>
  );
};




const CommissionStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <CommissionStack.Navigator
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

      <CommissionStack.Screen
        name="Commission Earned"
        component={CommissionScreen}
       
      />
    
    </CommissionStack.Navigator>
  );
};




const OfflineStack = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <OfflineStacks.Navigator
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

      <OfflineStacks.Screen
        name="Offlline"
        component={OfflineScreen}
       
      />
    
    </OfflineStacks.Navigator>
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
  
  