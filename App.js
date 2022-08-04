

import 'react-native-gesture-handler';
import React,{useState} from 'react';
import Button from 'react-native'
// import {createDrawerNavigator} from '@react-navigation/drawer';
import { NetworkProvider } from 'react-native-offline';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as ReduxProvider} from "react-redux";
import store, {persistor} from "./src/Redux/store";
import { NativeBaseProvider, Box } from 'native-base';

import {PersistGate} from 'redux-persist/integration/react';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import MainTabScreen from './src/screens/MainTabScreen';
import VerificationScreen from './src/screens/Verification';
import RegisterScreen from './src/screens/RegisterScreen';
import EmailVerificationScreen from './src/screens/EmailVerification';
import LoginCustomer from './src/screens/LoginCustomer';
import MainTabScreenCustomer from './src/screens/MainTabScreenCustomer';
import { checkConnected } from './src/Constant/NetworkCheck';
import NoConnectionScreen from './src/screens/NetworkCon';
import ChangePasswordScreen from './src/screens/changePass';
import AddWitness from './src/screens/AddWitness';
import AddDependant from './src/screens/AddDependant';
import AddCustomerScreen from './src/screens/AddCustomer';
import OfflineDependant from './src/screens/OfflineDependant';
import OfflineCustomers from './src/screens/OfflineCustomers';
import OfflineScreen from './src/screens/OfflineScreen';
import OfflineWitness from './src/screens/OfflineWitness';
const Stack = createStackNavigator();




const Auth = () => {
 
  // const [connectStatus,setConnectStatus] = useState(false)


  // checkConnected().then(res=>{
  //   setConnectStatus(res)
  // })
 
  
  return (

    
    <Stack.Navigator 
    screenOptions={{headerShown:true,
      headerTintColor:"#000",headerTransparent:true,headerTitle:true,title:false}}
    
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false,title: "Register"
        }}

       
      />


<Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="change"
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />




<Stack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
        options={{headerShown: false}}
      /> 




<Stack.Screen
        name="LoginScreenCustomer"
        component={LoginCustomer}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
 

  );

};



const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>


      {/* <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="NestedScreen1" component={NestedScreen} /> */}


<Stack.Screen
          name="Add Customer"
          component={AddCustomerScreen}
          options={{
             title: 'Add Customer',
             headerShown: true
             }}
        
        />

        



<Stack.Screen
          name="Dependant"
          component={AddDependant}
          options={{
            title: 'Add Dependant',
            headerShown: true
            }}
         
        />


        
{/* 
<Stack.Screen
          name="Offline"
          component={OfflineScreen}
          options={{
            title: 'Offline',
            headerShown: true
            }}
         
        /> */}


        
     


      <Stack.Screen
          name="Witness"
          component={AddWitness}
          options={{
             title: 'Add Witness',
             headerShown: true
            
             }}
        
        />








    </Stack.Navigator>
  );
};


export {FirstScreenNavigator};





const App = () => {



  return (
    <NativeBaseProvider>

    <NavigationContainer>
      
   <ReduxProvider store={store}>
   <PersistGate  persistor={persistor}>
      <Stack.Navigator initialRouteName="SplashScreen" >

        
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
       
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />




<Stack.Screen
          name="CustRoute"
          component={MainTabScreenCustomer}
          options={{headerShown: false}}
        
        />



<Stack.Screen
          name="MainScreen"
          component={MainTabScreen}
          options={{headerShown: false}}
        
        />

      <Stack.Screen
              name="Offlkine"
              component={OfflineScreen}
              options={{headerShown: false}}
            />


            
<Stack.Screen
          name="OfflineCustomers"
          component={OfflineCustomers}
          options={{
             title: 'Customers List',
             headerShown: true
            
             }}
        
        />


<Stack.Screen 
          name="OfflineDependant"
          component={OfflineDependant}
          options={{
             title: 'Dependant List',
             headerShown: true
            
             }}
        
        />


        
<Stack.Screen 
          name="OfflineWitness"
          component={OfflineWitness}
          options={{
             title: 'Witness List',
             headerShown: true
            
             }}
        
        />


{/* 
<Stack.Screen
          name="Witness"
          component={AddWitness}
          options={{
             title: 'Add Witness',
            
             }}
        
        />



<Stack.Screen
          name="Dependant"
          component={AddDependant}
          options={{ 
            title: 'Add Dependant',
           
           }}
        
        /> */}

      </Stack.Navigator>




      </PersistGate>
      </ReduxProvider>
    </NavigationContainer>
    </NativeBaseProvider>
  
  );
};

export default App;