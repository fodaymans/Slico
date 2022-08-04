import React, { useState, useEffect, dispatch } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import Loader from "../Constant/loader";
import styles from "../Styles/HomeStyle";
// import  DateTimePicker  from '@react-native-community/datetimepicker';
import ButtonStyle from '../Styles/ButtonStyle';
import CustomDatePicker from "../Components/DatePicker";
import { UserAPI } from "../api/services";
import Card from "../Components/Card";
import ComCard from "../Components/CommissionCard";
import { FONTS, SIZES, COLORS, icons } from '../Constant';

const CommissionScreen = ({ navigation }) => {
  const theme = useTheme();
  const [val, setValue] = useState([]);
  const [username, setUsername] = useState("");
  const [shouldShowError, setshouldShowError] = useState(false);

   const [total, setTotal] = useState([]);
  const user = useSelector(selectUser);
var tot = "";

var mid = `${user.MarketerID}`;
var f ="le"
  const [loading, setLoading] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShowComm, setShouldShowComm] = useState(false);
  const [shouldShowCommError, setShouldShowCommError] = useState(false);
  const [dateFrom, setStartDate] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [details, setDetails] = useState({});
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState(new Date());
  const [detail, setDetail] = useState({});


  const [showPickerStart, setShowPickerStart] = useState(false);
  const [showPickerEnd, setShowPickerEnd] = useState(false);

  const onChange = (event, selectedDate, fieldName) => {
    const currentDate = selectedDate || dateFrom;
    setShowPickerStart(Platform.OS === 'ios');
    setStartDate(currentDate);
    setDetails({...details, [fieldName]: currentDate});
  };


  const onChangeEnd = (event, selectedDate, fieldName) => {
    const currentDate = selectedDate || dateTo;
    setShowPickerEnd(Platform.OS === 'ios');
    setDateTo(currentDate);
    setDetail({...detail, [fieldName]: currentDate});
  };


  // useEffect(() => {
  //   fetchUsers();
  // }, []);



 
  const fetchUsers = () => {

    if (!dateFrom) {
      alert('Please choose the first date range to continue');
      return;
    }


    if (!dateTo) {
      alert('Second date range required');
      return;
    }


    setLoading(true);




     UserAPI.checKPaid({dateTo,mid}).then(
        function (response) {
            // response handling
                    // setLoading(false);
  
                    setValue(response.data)
                    //Hide Loader
                    setLoading(false);
                    console.log(response.data);
                    if (response.data == "") {
                      setshouldShowError(true)
                      setShouldShow(false)
                     
                     
                    }
                  
                        else{
                         
              
                          setShouldShow(true)
                     setshouldShowError(false)
                     setShouldShowComm(false)
                        }
  
          
        }
    ).catch(function (error) {
        if(error.request){
          alert(error);
         
          setLoading(false)
  
        }
    });



  };




  const fetchCommission = () => {

    if (!dateFrom) {
      alert('Please choose the first date range to continue');
      return;
    }


    if (!dateTo) {
      alert('Second date range required');
      return;
    }



    setLoading(true);


      
     UserAPI.checKCommission({dateFrom,dateTo,mid}).then(
      function (response) {
          // response handling
                  // setLoading(false);

                  setTotal(response.data[0])
                  //Hide Loader
                  setLoading(false);
                  console.log(response.data);
                  if (response.data != 'NO COMMISSION EARN ') {
          
                    setShouldShow(false)
         setshouldShowError(false)
         setShouldShowComm(true)

         
        }
      
            else{
              setShouldShow(false)
              setshouldShowError(false)
              setShouldShowCommError(true)

  
            }

        
      }
  ).catch(function (error) {
      if(error.request){
        alert(error);
       
        setLoading(false)

      }
  });







    


  
  };






  return (





    <View style={styles.container}>
         <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} />

        


  <Loader loading={loading} />

<View style={styles.card3}>
   <View style={styles.cardInfo1}>
  
  {/* <Text style={styles.cardDetails4}>Please select the date range to check your commission or customers who have not paid</Text> */}

<View style={{flex:1, flexDirection:'row'}}>



{/* from start */}



  <View style={{flexGrow:1}}>


  <TouchableOpacity
          onPress={() => setShowPickerStart(true)}
          style={{
            flexDirection: "row",
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // width : width / 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          <Text
            style={{
              color: "#000",
              alignSelf: "center",
            }}
          >
            {dateFrom.toISOString().slice(0, 10)}
          </Text>
        </TouchableOpacity>
        {showPickerStart && (
          <CustomDatePicker
            // label="DOB"
            value={dateFrom}
            // minimumDate={new Date(2016, 0, 1)}
            // maximumDate={new Date(2021, 10, 20)}
            // is24Hour={true}
            display="default"
            onChange={(event, date) => onChange(event, date)}

            // onTouchCancel={setShowPicker(false)}
          />
        )}


      {/* <CustomDatePicker
            date={dateFrom}
            onDateChange={dateFrom => setStartDate(dateFrom)}
            placeholder="From"
          /> */}




<Text style={styles.textInput1}>From</Text>
</View>



{/* from end */}


<View style={{flexGrow:1}}>


{/* <CustomDatePicker
            date={dateTo}
            onDateChange={dateTo => setDateTo(dateTo)}
            placeholder="To"
          /> */}


          
  <TouchableOpacity
          onPress={() => setShowPickerEnd(true)}
          style={{
            flexDirection: "row",
            height: 55,
           marginLeft : 5,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // width : width / 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          <Text
            style={{
              color: "#000",
              alignSelf: "center",
            }}
          >
            {dateTo.toISOString().slice(0, 10)}
          </Text>
        </TouchableOpacity>
        {showPickerEnd && (
          <CustomDatePicker
            // label="DOB"
            value={dateTo}
            // minimumDate={new Date(2016, 0, 1)}
            // maximumDate={new Date(2021, 10, 20)}
            // is24Hour={true}
            display="default"
            onChange={(event, date) => onChangeEnd(event, date)}

            // onTouchCancel={setShowPicker(false)}
          />
        )}




<Text style={styles.textInput1}>To</Text>

</View>





</View>


<View style={{flex:1, flexDirection:'row',marginTop:20,width:'100%'}}>
<View style={{flexGrow:1}}>

      <TouchableOpacity
        onPress={fetchCommission}
        >
       <View style={ButtonStyle.button1}>
 <Text
 style={ ButtonStyle.buttonText}>
      Commission
        </Text>
        </View>
         
      </TouchableOpacity>

</View>

<View style={{flexGrow:1}}>

      <TouchableOpacity
      onPress={fetchUsers}
       
       >
      <View style={ButtonStyle.button1}>
<Text
style={ ButtonStyle.buttonText}>
         Unpaid
       </Text>
       </View>
        
      
      
     </TouchableOpacity>
</View>

      </View>

   </View>
 </View> 




 {shouldShowComm ? (

<View style={styles.card4}>
<View style={styles.cardInfo1}>

<Text style={styles.cardTitle3}> Credit:{total.Credit}</Text>
<Text style={styles.cardTitle3}>Commission: SLL {total.Commission}</Text>

</View>
</View >

 ) : null}


    {shouldShowCommError ? (
          <View style={styles.container}>
    <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} />
   <View style={styles.card}>

   <View style={styles.cardInfo}>
     <Text style={styles.cardTitle}>NO COMMISSION EARNED </Text>
   
   
   
   </View>
 </View> 
 </View>

    ) : null}





 {shouldShowError ? (

<View style={styles.container}>
    <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} />
   <View style={styles.card}>

   <View style={styles.cardInfo}>
     <Text style={styles.cardTitle}>No data found </Text>
   
   
   
   </View>
 </View> 
 </View>

) : null}



    {shouldShow ? (

    
    <SafeAreaView  style={{ flex: 1 }}>
      
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

  
    
      <View style={styles.cardsWrapper}>
   {/* <Text>I HAVE PAID</Text> */}
      
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          onRefresh={fetchUsers}
          refreshing={loading}
          data={val}
         
          keyExtractor={item => item.IDCode}
          renderItem={({ item }) => {
         

            return (

           <ComCard
            // IDCode = {'Name ' + item.Name}
          IDCode = {' Name: ' + item.Firstname + " " + item.LastName}
          Name=  {'ID: ' + item.IDCode}
          Telephone=   {'Telephone: ' + item.Telephone}
          Balance = {'Outstanding Balance: ' + item.Balance}
           
           />

              //   <View style={styles.card1}>
              //   <View style={styles.cardInfo}>
              //     <Text style={styles.cardTitle}>
              // Customer ID :{item.IDCode}
              //     </Text>
              //     <Text style={styles.cardDetails2}>
              //     Date:  {item.DateofPayment}
              //     </Text>

              //     <Text style={styles.cardDetails}>
              //     Amount Paid:  {item.AmountPaid}
              //     </Text>
              //   </View>
              // </View>


             


           
            );
          }}
        />
      </View>

      {/* </ScrollView> */}
    </SafeAreaView >

) : null} 
    </View>
  );

        
};


export default CommissionScreen;

