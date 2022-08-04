import React, { useState, useEffect, dispatch } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { NetworkConsumer } from 'react-native-offline';
import Loader from "../Constant/loader";
// import FastImage from 'react-native-fast-image';
import styles from "../Styles/HomeStyle";
import { UserAPI } from '../api/services';
import Card from "../Components/Card";
import AppText from "../Components/AppText";
import BlankCard from "../Components/BlankCard";


function HomeScreen  ({ navigation,props })  {
  const theme = useTheme();
  const [val, setValue] = useState([]);
  // const [username, setUsername] = useState();
   const [total, setTotal] = useState('');
  const user = useSelector(selectUser);
  var tot = "";
  const [loading, setLoading] = useState(false);

  const handleEmpty = () => {
    return <Text style={styles.title}> No data present!</Text>;
  };


  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


var username =`${user.Username}`


  const fetchUsers = () => {
    setLoading(true);


   
      UserAPI.getCustomers({username}).then(
          function (response) {
              // response handling
              setValue(response.data)
              setLoading(false);
              // console.log("res",response.data);
          }
      ).catch(function (error) {
          // error handling
          if(error.request){
            alert(error);
           
            setLoading(false);
          }
      });


        UserAPI.getTotal({username}).then(
          function (response) {
              // response handling
              setTotal(response.data[0].Column1);
              setLoading(false);
              // console.log("res",response.data);
          }
      ).catch(function (error) {
          // error handling
          if(error.response){
            alert(error.message);
            setLoading(false);
          }
      });

  };





 if(val =="NO CUSTOMER "){
   return (
    <View style={styles.container}>
      
    <BlankCard
    text ="NO CUSTOMER REGISTERED"
    
    />
    <Text>{username}</Text>
<Image style={styles.bgImage}   source={require('../assets/backn.jpg')} />


    {/* <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} />
   <View style={styles.card}>

   <View style={styles.cardInfo}>
     <Text style={styles.cardTitle1}>NO CUSTOMER REGISTERED</Text>
   
   
   
   </View>
 </View>  */}
 </View>
   )
 
 }
 else{

  return (

    
    <View style={styles.container}>
         <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} />

       


  <Loader loading={loading} />


  <BlankCard 

      text="Total Customers Registered" 
      total = {total} 
      
  />



{/* <ScrollView> */}
     

      <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          onRefresh={fetchUsers}
          refreshing={loading}
          data={val}
          keyExtractor={item => item.FFID}
          renderItem={({ item }) => {
         

            return (

              <Card 
              IDCode={item.IDCode}
              Firstname=  {item.Firstname} 
               Lastname= {item.Lastname}
               Middlename={item.Middlename}
               BusinessLocation= {item.BusinessLocation}
               RegDate={item.RegDate}
              
              />
            );


          }

        }
      
              />
      
        
      
       
        
      
        
         {/* </ScrollView> */}
    
  
    </View>
  );

        
};

}


export default HomeScreen;
