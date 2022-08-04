View;

// Import React and Component
import React, {useState, useEffect, createRef} from 'react';
// import NetInfo from '@react-native-community/netinfo';
// import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  Image,
  Alert,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import {RadioButton} from 'react-native-paper';
import styles from '../Styles/TextInput';
import ButtonStyle from '../Styles/ButtonStyle';
import UploadLoader from '../Constant/UploadLoader';
import Loader from '../Constant/loader';
const {height} = Dimensions.get('screen');
import {useTheme} from 'react-native-paper';
import {State} from 'react-native-gesture-handler';
import AppTextInput from '../Components/CustomInput/CustomTextInput';
import CustomDatePicker from '../Components/DatePicker';
import {UserAPI} from '../api/services';
import {buttonStyle} from 'styled-system';
// import  DateTimePicker  from '@react-native-community/datetimepicker';
import InputLayout from './InputLayout';
import {FONTS, SIZES, COLORS, icons} from '../Constant';
import {FormInput, TextButton} from '../Components';
// import { Radio, Center, NativeBaseProvider } from "native-base";
// import { RadioButton } from 'react-native-paper';
import { addDependants } from '../Redux/dependantSlice';
import {useDispatch} from 'react-redux';
import { selectDependants } from '../Redux/dependantSlice';
import { setNewDep } from '../Redux/actions';
const AddDependant = ({route, navigation}) => {
  // const [dates, setStartDate] = useState(new Date());

  const {rannumber} = route.params;
  const [vidno, setVid] = useState(rannumber);
const selectdep = useSelector(selectDependants)
console.log(selectdep)
  // const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState({});
  const {width, height} = Dimensions.get('screen');
  const dispatch = useDispatch();

  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Middlename, setMiddleName] = useState('');
  const [Telephonee, setTelephone] = useState('');
  const [Gender, setGender] = useState('');
  const [Address, setAddress] = useState('');
  const [Relationship, setRelationship] = useState('');
  const [DOB, setDob] = useState(new Date());
  const [PercentageShared, setPercentageShared] = useState('');
  const [Status, setStatus] = useState('Active');
  const [checked, setChecked] = React.useState('Male');
  let dateID =   Date.now();
  const [showPickerStart, setShowPickerStart] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    'Select Relationship',
  );
  // console.log(selectedLanguage)

  let dateOfBirth = DOB.toISOString().slice(0, 10)

  const [color, setColor] = useState();

  const [SelectedGender, setSelectedGender] = useState('Select Gender');
  const { newDependant,newDependantID } = useSelector(state => state.DependantReducer);

  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadding] = useState(false);
  const [errortext, setErrortext] = useState('');

  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [Imageloader, setImageLoader] = useState(false);

  const [open, setOpen] = useState(false);
  const [img, setImg] = useState('');

  // console.log('IMGGGGG', img.length);

  const user = useSelector(selectUser);

  var username = `${user.Username}`;

  // NetInfo.addEventListener(networkState => {
  //   console.log('Connection type - ', networkState.type);
  //   console.log('Is connected? - ', networkState.isConnected);
  // });

  // NetInfo.fetch().then(networkState => {
  //   console.log('Connection type - ', networkState.type);
  //   console.log('Is connected? - ', networkState.isConnected);
  // });

  const onChange = (event, selectedDate, fieldName) => {
    const currentDate = selectedDate || DOB;
    setShowPickerStart(Platform.OS === 'ios');
    setDob(currentDate);
    setDetails({...details, [fieldName]: currentDate});
  };


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

    if (!PercentageShared) {
      alert('Please Enter Percentage ');
      return;
    }

    if (PercentageShared > 100) {
      alert('Percentage Exceeds the maximum required ');
      return;
    }

    if (!selectedLanguage) {
      alert('Please Select Relationship ');
      return;
    }

          var Task = {
            ID: dateID,
            Username: username,
            DID: vidno,
            FirstName: Fname,
            MiddleName: Middlename,
            LastName: Lname,
            Gender: checked,
            Address: Address,
            Telephone: Telephonee,
            PercentageShared: PercentageShared,
            Relationship: selectedLanguage,
            Status: Status,
            DOB: dateOfBirth,
          }

          const index = newDependant.findIndex(task => task.ID === newDependantID);
          let newTasks = [];
          if (index > -1) {
              newTasks = [...newDependant];
              newTasks[index] = Task;
          } else {
           newTasks = [...newDependant, Task];
          }

          dispatch(setNewDep(newTasks));
          // alert("Save offline Successfully");
          Alert.alert(
            'Save offline Successfully',
            'Do you want to add Another?',
            [
              {
                text: 'No',
                onPress: () => {
                  //   return null;
                  navigation.navigate('Witness', {vidno});
                },
              },
              {
                text: 'Yes',
                onPress: () => {
                  //   navigation.replace("Dependant");
                  return null;
                },
                // onPress : handleLogout()
              },
            ],
            {cancelable: false},
          );
 
          // navigation.navigate('Witness', {vidno});


  }


  const handleSubmitButton = () => {
    // setErrortext('');

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

    if (!PercentageShared) {
      alert('Please Enter Percentage ');
      return;
    }

    if (PercentageShared > 100) {
      alert('Percentage Exceeds the maximum required ');
      return;
    }

    if (!selectedLanguage) {
      alert('Please Select Relationship ');
      return;
    }

    // Show Loader
    setLoading(true);

    UserAPI.AddDependant({
      username,
      vidno,
      Fname,
      Middlename,
      Lname,
      checked,
      Address,
      Telephonee,
      PercentageShared,
      selectedLanguage,
      Status,
      dateOfBirth,
      dateID
    })
      .then(function (response) {
        // response handling
        if (response.data == 'successful') {
          //   alert('Witness Added Successfully');
          Alert.alert(
            'Dependant Added Successfully',
            'Do you want to add Another?',
            [
              {
                text: 'No',
                onPress: () => {
                  //   return null;
                  navigation.navigate('Witness', {vidno});
                },
              },
              {
                text: 'Yes',
                onPress: () => {
                  //   navigation.replace("Dependant");
                  return null;
                },
                // onPress : handleLogout()
              },
            ],
            {cancelable: false},
          );
        } else {
          alert('error registering');
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
        }}>
        {/* <AppTextInput
              style={styles.textInput}
              // onChangeText={vidno => setVid(vidno)}
              placeholder="VNno"
              value={vidno}
              editable={false}
              autoCapitalize="sentences"
              returnKeyType="done"
            /> */}

        <FormInput
          label="First Name"
          placeholder="First Name"
          onChange={Fname => setFname(Fname)}
         
        />

        <FormInput
          label="Middle Name"
          placeholder="Middle Name"
          onChange={MiddleName => setMiddleName(MiddleName)}
         
        />

        <FormInput
          label="Last Name"
          placeholder="Last Name"
          onChange={Lname => setLname(Lname)}
         
        />

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>DOB</Text>

        <TouchableOpacity
          onPress={() => setShowPickerStart(true)}
          style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}>
          <Text
            style={{
              color: '#9E9E9E',
              alignSelf: 'center',
            }}>
            {DOB.toISOString().slice(0, 10)}
          </Text>
        </TouchableOpacity>
        {showPickerStart && (
          <CustomDatePicker
            label="DOB"
            value={DOB}
            display="default"
            onChange={(event, date) => onChange(event, date)}

            // onTouchCancel={setShowPicker(false)}
          />
        )}

        <FormInput
          label="Phone"
          keyboardType="numeric"
          placeholder="077123456"
          maxLength={9}
          onChange={Telephone => setTelephone(Telephone)}
         
        />

        <FormInput
          label="Address"
          placeholder="Address"
          onChange={Address => setAddress(Address)}
        
        />

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>Select Gender</Text>

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

      

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}>
          <Picker.Item label="Select Relationship" />
          <Picker.Item label="Daughter" value="Daughter" />
          <Picker.Item label="Son" value="Son" />
          <Picker.Item label="Wife" value="Wife" />
          <Picker.Item label="Husband" value="Husband" />
          <Picker.Item label="Mother" value="Mother" />
          <Picker.Item label="Father" value="Father" />
          <Picker.Item label="Sister" value="Sister" />
          <Picker.Item label="Brother" value="Brother" />
          <Picker.Item label="Niece" value="Niece" />
          <Picker.Item label="Nephew" value="Nephew" />
          <Picker.Item label="Cousin" value="Cousin" />
          <Picker.Item label="Aunt " value="Aunt" />
          <Picker.Item label="Uncle" value="Uncle" />
          <Picker.Item label="Grand-Mother" value="Grand-Mother" />
          <Picker.Item label="Grand-Father" value="Grand-Father" />
        </Picker>

        <FormInput
          label="Percentage"
          placeholder="Percentage"
          keyboardType="numeric"
          maxLength={3}
          onChange={PercentageShared => setPercentageShared(PercentageShared)}
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

        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}



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
{/* 
      <View style={ButtonStyle.buttonContainer}>
        <View
          style={{flex: 1, flexDirection: 'row', marginTop: 20, width: '100%'}}>
          <View style={{flexGrow: 1}}>
            <TouchableOpacity onPress={() => handleSubmitButton()}>
              <View style={ButtonStyle.button}>
                <Text style={ButtonStyle.buttonText}>SAVE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexGrow: 1}}>
            <TouchableOpacity
              style={ButtonStyle.alternativeLayoutButtonContainer}
              onPress={() => navigation.replace('MainScreen')}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}>
                SKIP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </InputLayout>

  );
};

export default AddDependant;
