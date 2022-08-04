
import React, {useState, useEffect, createRef} from 'react';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONTS, SIZES, COLORS, icons} from '../Constant';
import InputLayout from './InputLayout';
import {FormInput, TextButton} from '../Components';
import { RadioButton } from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../Styles/TextInput';
import ButtonStyle from '../Styles/ButtonStyle';
import UploadLoader from '../Constant/UploadLoader';
import Loader from '../Constant/loader';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import CustomDatePicker from '../Components/DatePicker';
import {UserAPI} from '../api/services';
import { selectPremium } from '../Redux/premiumSlice';
import { addPremium } from '../Redux/premiumSlice';
import { addDistrict } from '../Redux/districtSlice';
import { selectDistrict } from '../Redux/districtSlice';
import { addCustomer } from '../Redux/customerSlice';
import { setNew } from '../Redux/actions';
const {width, height} = Dimensions.get('screen');

const AddCustomerScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const { width, height } = Dimensions.get("window");

  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [details, setDetails] = useState({});

  const [MiddleName, setMiddleName] = useState('');
  const [Telephone, setTelephone] = useState('');
  const [Gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [BusinessLocation, setBusinessLocation] = useState('');
  const [Address, setAddress] = useState('');

  const [Regdate, setRegdate] = useState('');
  
  const [color, setColor] = useState();
  // const [selectedLanguage, setSelectedLanguage] = useState('Select District');
  const [SelectedGender, setSelectedGender] = useState("Male");
  const dispatch = useDispatch();
  const { newReg,newRegID } = useSelector(state => state.customerReducer);

  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadding] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [image, setImage] = useState(null);
  const [Imageloader, setImageLoader] = useState(false);
  const [showPickerStart, setShowPickerStart] = useState(false);
  const [img, setImg] = useState('');
  // console.log('IMGGGGG', img.length);
  const user = useSelector(selectUser);
  const dist = useSelector(selectDistrict);
  // console.log("district",dist)


  // const prem = useSelector(selectPremium);

  const [imgUrl, setImgUrl] = useState('');
  // console.log('prem', prem);

  let dateOfBirth = date.toISOString().slice(0, 10)

let dateID =   Date.now();

  // console.log("dlog",dateID);
  const [text, setText] = useState('');

  const [Regions, setRegions] = useState([]);

  const [District, setDistrict] = useState([]);

  const [SelectedValues, setSelectedValue] = useState([]);
  const [Premium, setPremium] = useState([]);
  const [checked, setChecked] = React.useState('Male');
  const [Pre, setPre] = useState([]);
  // const [selectedValue ,setSelectedValue] = useState("");
  console.log(SelectedValues);

  const onChange = (event, selectedDate, fieldName) => {
    const currentDate = selectedDate || date;
    setShowPickerStart(Platform.OS === 'ios');
    setDate(currentDate);
    setDetails({...details, [fieldName]: currentDate});
  };

  const uuidv4 = () => {
    return 'xxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  var username = `${user.Username}`;
  var mid = `${user.MarketerID}`;

  const [rannumber, setRegion] = useState(uuidv4);

  useEffect(() => {}, [uuidv4]);


//   const byteCharacters = atob(img);
// const byteNumbers = new Array(byteCharacters.length);
// for (let i = 0; i < byteCharacters.length; i++) {
//   byteNumbers[i] = byteCharacters.charCodeAt(i);
// }
// const byteArray = new Uint8Array(byteNumbers);
// const blob = new Blob([byteArray], {type: 'audio/mp3'});

// console.log("blob",blob)

  


  const cameraUpload = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      // cropping: true,
      includeBase64: true,
      includeExif: true,
      mediaType: 'photo',
    })
      .then(image => {
        // console.log(image.path)
        setImage(image.path);
        setImg(image.data);
        // console.log(image.data)
      })
      .catch(e => alert(e));

    // handleImgUpload();
  };

  //UPLOAD IMAGE FIRST BEFORE SENDING DATA TO YOUR DATABASE
  //UPLOAD IMAGE FIRST BEFORE SENDING DATA TO YOUR DATABASE


  // const handleImgUpload = imgb => {
  //   setImageLoader(true);
  //   try {
  //     const images = imgb;
  //     let promiseArray = [];
  //     let imgbb = images.toString('base64');
  //     const details = {image: `${imgbb}`};
  //     let formBody = [];
  //     for (const property in details) {
  //       const encodedKey = encodeURIComponent(property);
  //       const encodedValue = encodeURIComponent(details[property]);
  //       formBody.push(encodedKey + '=' + encodedValue);
  //     }
  //     formBody = formBody.join('&');
  //     promiseArray.push(
  //       fetch(
  //         //ETER YOUR API KEY FROM IMGBB
  //         'https://api.imgbb.com/1/upload?key=77460e968ea3151722197d380d5d7ac7',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //           },
  //           body: formBody,
  //         },
  //       ).then(r => r.json()),
  //     );

  //     Promise.all(promiseArray)
  //       .then(values => {
  //         if (values[0].success) {
  //           let thumb = '';
  //           values.map(imgs => {
  //             thumb = values[0].data.thumb.url;
  //             setImgUrl(imgs.data.url.replace(/["']/g, ''));
  //           });
  //           setImageLoader(false);
  //           //YOU SEND imgURL
  //           // handleSubmitButton();
  //         } else {
  //           setImageLoader(false);
  //           alert(
  //             'An error occurred while uploading image, please check your connection and try again',
  //           );
  //         }
  //       })
  //       .catch(err => {
  //         setImageLoader(false);
  //         console.log('ERORRRRR', err);
  //         alert(
  //           'An error occurred while uploading image, please check your connection and try again',
  //         );
  //       });
  //   } catch (e) {
  //     setImageLoader(false);
  //     console.log('ERRRR', e);
  //   }
    
  // };



  const CloseModal = () => {
    setImageLoader(false);
  };



  const Save = () => {
    if (!Fname) {
      alert('Please Enter First Name');
      return;
    }

    if (!Lname) {
      alert('Please Enter Last Name');
      return;
    }

    if (!Telephone) {
      alert('Please Enter Phone');
      return;
    }

    if (!Pre) {
      alert('Select Premium');
      return;
    }

    if (!SelectedValues) {
      alert('Please Select District');
      return;
    }

    if (!checked) {
      alert('Please Select Gender');
      return;
    }

    if (!BusinessLocation) {
      alert('Please Enter Business Location');
      return;
    }

    if (!Address) {
      alert('Please Enter Address ');
      return;
    }

    if (!img) {
      alert('Please Upload Photo');
      return;
    }

    var Task = {
      ID: dateID,
      Username: username,
      MarketerID: mid,
      FirstName: Fname,
      MiddleName: MiddleName,
      LastName: Lname,
      Gender: checked,
      DOB: dateOfBirth,
      BusinessLocation: BusinessLocation,
      Address: Address,
      District: SelectedValues,
      Telephone: Telephone,
      Depid: rannumber,
      Premium : Pre,
      Photo: img,
  }


  const index = newReg.findIndex(task => task.ID === newRegID);
  let newTasks = [];
  if (index > -1) {
      newTasks = [...newReg];
      newTasks[index] = Task;
  } else {
   newTasks = [...newReg, Task];
  }

  dispatch(setNew(newTasks));
  alert("Customer Added Successfully");
  navigation.navigate('Dependant', {rannumber});





  }


  const handleSubmitButton = () => {
    // generateRandomNumber();

    setErrortext('');

    // if (!img) {
    //   alert('Please Upload Photo');
    //   return;
    // }

    if (!Fname) {
      alert('Please Enter First Name');
      return;
    }

    if (!Lname) {
      alert('Please Enter Last Name');
      return;
    }

    if (!Telephone) {
      alert('Please Enter Phone');
      return;
    }

    if (!Pre) {
      alert('Select Premium');
      return;
    }

    if (!SelectedValues) {
      alert('Please Select District');
      return;
    }

    if (!checked) {
      alert('Please Select Gender');
      return;
    }

    if (!BusinessLocation) {
      alert('Please Enter Business Location');
      return;
    }

    if (!Address) {
      alert('Please Enter Address ');
      return;
    }

    if (!img) {
      alert('Please Upload Photo');
      return;
    }

    // Show Loader
    setLoading(true);

    UserAPI.AddCustomer({
      username,
      mid,
      Fname,
      MiddleName,
      Lname,
      checked,
      dateOfBirth,
      BusinessLocation,
      Address,
      Pre,
      SelectedValues,
      Telephone,
      rannumber,
      img,  
      dateID
    })
      .then(function (response) {
        // response handling
        if (response.data == 'Success') {
          navigation.navigate('Dependant', {rannumber});

          alert('Customer Added Successfully');
          return;
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

  useEffect(() => {
    fetchRegion();
    fetchPremium();
  }, []);

  const fetchPremium = () => {
    // setLoading(true);

    axios
      .get(
        `http://portal.slicoinsurance.com/slicoapi/api/Marketer/getCurrency`,
        {},
      )
      .then(({data}) => {
        setPremium(data);
        dispatch(addPremium(data));

        // console.log('pre', data);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  const prem = useSelector(selectPremium);
  // console.log('prem', prem);



  const fetchRegion = () => {
    // setLoading(true);

    axios
      .get(
        `http://portal.slicoinsurance.com/slicoapi/api/Marketer/getDistrict`,
        {},
      )
      .then(({data}) => {
        setDistrict(data);
        dispatch(addDistrict(data));

      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <InputLayout>
    <StatusBar barStyle="light-content" backgroundColor="#013220"/>

      {/* <Image style={styles.bgImage}   source={require('../assets/back.jpeg')} /> */}

      <UploadLoader loadings={Imageloader}
      onRequestClose={CloseModal}

      />
      {/* <ActivityIndicator animating={Imageloader} size="large" color="#0000ff"/> */}

      {errortext != '' ? (
        <Text style={styles.errorTextStyle}> {errortext} </Text>
      ) : null}

      <Loader loading={loading} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: 2,
        }}>
        {/* <KeyboardAvoidingView enabled> */}
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={cameraUpload}>
            <View
              style={{
                height: 80,
                marginTop: 10,
                width: 100,
                marginBottom : 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                  // uri: base64Icon
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#000"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {/* <Button
            style={ButtonStyle.buttonStyle1}
            onPress={() => handleImgUpload(img)}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                },
              ]}>
              Upload Image
            </Text>
          </Button> */}
        </View>

        <FormInput
          label="First Name"
          placeholder="First Name"
          onChange={Fname => setFname(Fname)}
          // errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.profile}
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
          label="Middle Name"
          placeholder="Middle Name"
          onChange={MiddleName => setMiddleName(MiddleName)}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.profile}
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
          label="Last Name"
          placeholder="Last Name"
          onChange={Lname => setLname(Lname)}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.profile}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.green,
                }}
              />
            </View>
          }
        />

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>Select Gender</Text> 


<Text>Male</Text>
        <RadioButton
        
        value="Male"
        status={ checked === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Male')}
      />
      <Text>Female</Text>

      <RadioButton
        value="Female"
        status={ checked === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Female')}
      />

         {/* <Radio.Group
          name="myRadioGroup"
          value={SelectedGender}
          onChange={nextValue => {
            setSelectedGender(nextValue);
          }}>
          <Radio value="Male" my={1}>
            Male
          </Radio>
          <Radio value="Female" my={1}>
            Female
          </Radio>
        </Radio.Group> */}

        <FormInput
          label="Phone"
          keyboardType="numeric"
          placeholder="77123456"
          maxLength={8}
          onChange={Telephone => setTelephone(Telephone)}
          // errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.cart}
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
          label="Business Location"
          placeholder="Business Location"
          onChange={BusinessLocation => setBusinessLocation(BusinessLocation)}
          // errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.location}
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
          label="Address"
          placeholder="Address"
          onChange={Address => setAddress(Address)}
          // errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.location}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.green,
                }}
              />
            </View>
          }
        />

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>DOB</Text>

        <TouchableOpacity
          onPress={() => setShowPickerStart(true)}
          style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // width : width / 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}>
          <Text
            style={{
              color: '#9E9E9E',
              alignSelf: 'center',
            }}>
            {date.toISOString().slice(0, 10)}
          </Text>
        </TouchableOpacity>
        {showPickerStart && (
          <CustomDatePicker
            label="DOB"
            value={date}
            // format={"YYYY-MM-DD"}
            minimumDate={new Date(1967, 0, 1)}
            maximumDate={new Date(2004, 11, 31)}
            // minimumDate={moment().subtract(55, "years")}
            // maximumDate={moment().subtract(18, "years")}
            // is24Hour={true}
            display="default"
            onChange={(event, date) => onChange(event, date)}

            // onTouchCancel={setShowPicker(false)}
          />
        )}

        {/* <View
          style={{
            flexDirection: "row",
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // width : width / 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
        > */}

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          Select District
        </Text>

        <Picker
          label="Select District"
          style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // width : width / 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          selectedValue={SelectedValues}
          // style={styles.textBox}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
          }}>
          <Picker.Item label="Select District" />

          {dist.map((SelectedValue, index) => {
            return (
              <Picker.Item
                label={SelectedValue.District}
                value={SelectedValue.District}
                key={index}
              />
            );
          })}
        </Picker>

        <Text style={{color: COLORS.gray, ...FONTS.body4}}>Select Premium</Text>

        <Picker
          label="Select Premium"
          style={{
            flexDirection: 'row',
            height: 55,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          selectedValue={Pre}
          // style={styles.textBox}

          onValueChange={(itemValue, itemIndex) => {
            setPre(itemValue);
          }}>
          <Picker.Item label="Select Premium" />
          {prem.map((Pre, index) => {
            return (
              <Picker.Item label={Pre.Name} value={Pre.Premium} key={index} />
            );
          })}
        </Picker>

        {/* <SubmitButton title="SAVE" onPress={() => handleSubmitButton()} /> */}

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
            width: width / 3 - 2,
            borderRadius: 20,
    
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
            width: width / 3 - 2,
            borderRadius: 20,

            // paddingVertical: 10,
            alignItems: 'center',
            borderWidth: 5,
            justifyContent: 'center',
            backgroundColor: '#00176A',
            borderColor: '#7ED7E1',
          }}
          onPress={Save}></TextButton>


</View>

        {/* {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null} */}
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </InputLayout>
  );
};

export default AddCustomerScreen;


// export default () => {
//   return (
//     <NativeBaseProvider>
      
//         <AddCustomerScreen />
//     </NativeBaseProvider>
//   )
// }
