import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import {useTheme} from 'react-native-paper';
import { useSelector } from "react-redux";
import { selectUser } from '../Redux/userSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../Styles/ProfileStyle';
import { FONTS, SIZES, COLORS, icons } from '../Constant';
import { FormInput, TextButton } from '../Components';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';
import InputLayout from './InputLayout';
import ButtonStyle from '../Styles/ButtonStyle';

const CustomerProfileScreen = () => {
    const user = useSelector(selectUser);
    const [Fname, setFname] = useState(user.Fname);
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();
  const [avatar, setavatar] = useState(
    'https://icons-for-free.com/iconfiles/png/512/profile+profile+page+user+icon-1320186864367220794.png',
  );
  const [editable, setEditable] = useState(false);


  const [avatarBackground, setavatarBackground] = useState(
    null,
  );

  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // }

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // }


  
  function isEnableSignIn(){
    return editable == "false" 

}



  return (


    <InputLayout>

    <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              marginTop: SIZES.padding,
            }}>
    
    










   
     


          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 80,
                marginTop: SIZES.padding,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>



              



<ImageBackground
                source={{
                  uri: user.Photo,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
               
              </ImageBackground>

               
             
            </View>

          <View
            style={ButtonStyle.buttonStyle1}
           >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                },
              ]}>
               {user.IDCode}
            </Text>
          </View>
        </View>

        
        {/* </ImageBackground> */}


       

        <FormInput
          label=" Name"
         value= {user.Firstname + " " +  user.Lastname + " " + user.Middlename}  
         editable={false}
        //  editable={isEnableSignIn() ? true : false}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}
        
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
          label=" Telephone"
         value= {user.Telephone } 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.notification}
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
          label=" Business Location"
         value= {user.BusinessLocation } 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

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
          label=" Address"
         value= {user.Address } 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

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
          label=" District"
         value= {user.District } 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

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
          label=" Region"
         value= {user.Region } 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

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


           












              
  

              </ScrollView>
              </InputLayout>


              

            


  );
};



export default CustomerProfileScreen;
