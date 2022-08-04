

// Import React and Component
import React, {useState, useEffect, createRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StatusBar,
  Image,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import {RadioButton} from 'react-native-paper';
import styles from '../Styles/TextInput';
import ButtonStyle from '../Styles/ButtonStyle';
import UploadLoader from '../Constant/UploadLoader';
import Loader from '../Constant/loader';
const {height} = Dimensions.get('screen');
import { addWitness } from '../Redux/witnessSlice';
import {useTheme} from 'react-native-paper';
import { State } from 'react-native-gesture-handler';
import AppTextInput from '../Components/CustomInput/CustomTextInput';
import { UserAPI } from '../api/services';
import InputLayout from './InputLayout';
import { FONTS, SIZES, COLORS, icons } from '../Constant';
import { FormInput, TextButton } from '../Components';
// import { Radio, Center, NativeBaseProvider } from "native-base";
import {useDispatch} from 'react-redux';
import { setNewWitness } from '../Redux/actions';
 


const AddWitness = ({route,navigation}) => {

  const  { vidno} = route.params;
    const [vidsno, setVid] = useState(vidno);
    // console.log(vidsno)

    const dispatch = useDispatch();

    const {width, height} = Dimensions.get('screen');
    const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Middlename, setMiddleName] = useState('');
  const [Telephonee, setTelephone] = useState('');
  const [Gender, setGender] = useState('');
  const [Address, setAddress] = useState('');
  const [checked, setChecked] = React.useState('Male');

  const { newWitness,newWitnessID } = useSelector(state => state.WitnessReducer);


  let dateID =   Date.now();


  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadding] = useState(false);
  const [errortext, setErrortext] = useState('');

  const [image, setImage] = useState(null);
  const [Imageloader, setImageLoader] = useState(false);

  const [img, setImg] = useState('');

  console.log('IMGGGGG', img.length);

  const user = useSelector(selectUser);

  var username = `${user.Username}`;
  var mid = `${user.MarketerID}`;

  // NetInfo.addEventListener(networkState => {
  //   console.log('Connection type - ', networkState.type);
  //   console.log('Is connected? - ', networkState.isConnected);
  // });

  // NetInfo.fetch().then(networkState => {
  //   console.log('Connection type - ', networkState.type);
  //   console.log('Is connected? - ', networkState.isConnected);
  // });

 
const SaveOffline = () => {
  
  if (!Fname) {
    alert('Please Enter First Name');
    return;
  }

  if (!Lname) {
    alert('Please Enter Last Name');
    return;
  }

  if (!Telephonee) {
    alert('Please Enter Phone');
    return;
  }

  if (!checked) {
      alert('Please Select Gender');
      return;
    }

 

  if (!Address) {
    alert('Please Enter Address ');
    return;
  }


      var Task = {
        ID : dateID,
        Username: username,
        // FFID: mid,
        FirstName: Fname,
        MiddleName: Middlename,
        LastName: Lname,
        Gender: checked,
        Address: Address,
        DID: vidsno,
        Telephone: Telephonee,
      }

      const index = newWitness.findIndex(task => task.ID === newWitnessID);
      let newTasks = [];
      if (index > -1) {
          newTasks = [...newWitness];
          newTasks[index] = Task;
      } else {
       newTasks = [...newWitness, Task];
      }

      dispatch(setNewWitness(newTasks));
      alert("Save offline Successfully");

      // navigation.navigate('Witness', {vidno});

      navigation.replace('MainScreen')

}
 

  const handleSubmitButton = () => {

   

    if (!Fname) {
      alert('Please Enter First Name');
      return;
    }

    if (!Lname) {
      alert('Please Enter Last Name');
      return;
    }

    if (!Telephonee) {
      alert('Please Enter Phone');
      return;
    }

    if (!checked) {
        alert('Please Select Gender');
        return;
      }

   

    if (!Address) {
      alert('Please Enter Address ');
      return;
    }


    setLoading(true);

    UserAPI.AddWitness({
      username,
      // mid,
      Fname,
      Middlename,
      Lname,
      checked,
      Address,
      Telephonee,
      vidsno,
      dateID
     
    })
      .then(function (response) {
        // response handling
        if (response.data == 'successful') {
           alert('Witness Added Successfully');
            navigation.replace('MainScreen');
               
          }
          else{
          alert("error Adding Witness")
          }
        setLoading(false);
        console.log('res', response.data);
      })
      .catch(function (error) {
        // error handling
        if (error.response) {
          alert(error.message);
          setLoading(false);
        }
      });


 
  };


       
         



  return (

    <InputLayout>
        <StatusBar barStyle="light-content" backgroundColor="#013220"/>


      <UploadLoader loadings={Imageloader} />

     
      <Loader loading={loading} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        
          



        <FormInput
          label="First Name"
          placeholder="First Name"
          onChange={(Fname) => setFname(Fname)}
          // errorMsg={emailError}
          // appendComponent={
          //   <View
          //     style={{
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Image
          //       source={icons.correct}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         tintColor: COLORS.green,
          //       }}
          //     />
          //   </View>
          // }
        />

<FormInput
          label="Middle Name"
          placeholder="Middle Name"
          onChange={(MiddleName) => setMiddleName(MiddleName)}
          // appendComponent={
          //   <View
          //     style={{
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Image
          //       source={icons.correct}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         tintColor: COLORS.green,
          //       }}
          //     />
          //   </View>
          // }
        />

<FormInput
          label="Last Name"
          placeholder="Last Name"
          onChange={(Lname) => setLname(Lname)}
          // appendComponent={
          //   <View
          //     style={{
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Image
          //       source={icons.correct}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         tintColor: COLORS.green,
          //       }}
          //     />
          //   </View>
          // }
        />

           
<FormInput
          label="Phone"
          keyboardType="numeric"
          placeholder="077123456"
          maxLength={9}
          onChange={(Telephone) => setTelephone(Telephone)}
          // errorMsg={emailError}
          // appendComponent={
          //   <View
          //     style={{
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Image
          //       source={icons.correct}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         tintColor: COLORS.green,
          //       }}
          //     />
          //   </View>
          // }
        />


<FormInput
          label="Address"
          placeholder="Address"
          onChange={(Address) => setAddress(Address)}
          // errorMsg={emailError}
          // appendComponent={
          //   <View
          //     style={{
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Image
          //       source={icons.correct}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         tintColor: COLORS.green,
          //       }}
          //     />
          //   </View>
          // }
        />



<Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          Select Gender
        </Text>


<Text>Male</Text>
<RadioButton
  value="Male"
  status={checked === 'Male' ? 'checked' : 'unchecked'}
  onPress={() => setChecked('Male')}
/>
<Text>Female</Text>

<RadioButton
  value="Female"
  status={checked === 'Female' ? 'checked' : 'unchecked'}
  onPress={() => setChecked('Female')}
/>

     

      

         
          {/* {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null} */}




<View
        style={{
          margin: 1,
          flexDirection: 'row',
          //    paddingHorizontal : SIZES.padding,
          marginTop: SIZES.base,
          alignSelf:'center',
          // width: width / 2,
          borderRadius: SIZES.radius,
          //    backgroundColor : COLORS.lightGray2,
        }}>
        <TextButton
          label="SUBMIT"
          buttonContainerStyle={{
            // height: 55,

            // alignItems: 'center',
            // marginTop: SIZES.padding,
            // borderRadius: SIZES.radius,
            // backgroundColor: COLORS.darkBlue,

            marginLeft: 1,
            width: width / 4 - 2,
            borderRadius: 10,
    
            // paddingVertical: 10,
            alignItems: 'center',
            borderWidth: 5,
            justifyContent: 'center',
            backgroundColor: '#00176A',
            borderColor: '#7ED7E1',
          }}
          onPress={handleSubmitButton}></TextButton>


<TextButton
          label="OFFLINE"
          buttonContainerStyle={{
            // height: 55,

            // alignItems: 'center',
            // marginTop: SIZES.padding,
            // borderRadius: SIZES.radius,
            // backgroundColor: COLORS.darkBlue,

            marginLeft: 12,
            width: width / 4 - 2,
            borderRadius: 10,

            // paddingVertical: 10,
            alignItems: 'center',
            borderWidth: 5,
            justifyContent: 'center',
            backgroundColor: '#00176A',
            borderColor: '#7ED7E1',
          }}
          onPress={SaveOffline}>

          </TextButton>



          
<TextButton
          label="SKIP"
          buttonContainerStyle={{
            // height: 55,

            // alignItems: 'center',
            // marginTop: SIZES.padding,
            // borderRadius: SIZES.radius,
            // backgroundColor: COLORS.darkBlue,

            marginLeft: 12,
            width: width / 4 - 2,
            borderRadius: 10,

            // paddingVertical: 10,
            alignItems: 'center',
            borderWidth: 5,
            justifyContent: 'center',
            backgroundColor: '#00176A',
            borderColor: '#7ED7E1',
          }}
          onPress={() => navigation.replace('MainScreen')}>

          </TextButton>


</View>


      </ScrollView>

      {/* <TouchableOpacity onPress={() => handleSubmitButton()}>
       

<View style={ButtonStyle.button}>
 <Text
 style={ ButtonStyle.buttonText}>
          SUBMIT
        </Text>
        </View>
      </TouchableOpacity> */}


      </InputLayout>

     
  );
};

export default AddWitness;
