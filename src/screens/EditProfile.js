import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Image,

} from 'react-native';

import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import ButtonStyle from '../Styles/ButtonStyle';

import styles from '../Styles/ProfileStyle';
import {FONTS, SIZES, COLORS, icons} from '../Constant';

import ImagePicker from 'react-native-image-crop-picker';
import InputLayout from './InputLayout';
import { FormInput } from '../Components';

const EditProfileScreen = () => {
  const user = useSelector(selectUser);
  const [Fname, setFname] = useState(user.Fname);
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const {colors} = useTheme();
  const [editable, setEditable] = useState(false);

  const [avatar, setavatar] = useState(
    'https://icons-for-free.com/iconfiles/png/512/profile+profile+page+user+icon-1320186864367220794.png',
  );

  const [avatarBackground, setavatarBackground] = useState(null);

  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // };

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // };

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
          marginTop: 10,
        }}>



<View style={{alignItems: 'center'}}>
            <View
              style={{
                height: 80,
                marginTop: 1,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: avatar,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
               
              </ImageBackground>
            </View>

          <View
           
           >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                },
              ]}>
                {user.Username}
            </Text>
          </View>
        </View>


        <FormInput
          label=" Name"
         value= {user.FirstName + " " +  user.LastName} 
         editable={false}
        //  editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.transparentPrimary : COLORS.orange
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
          label=" Email"
         value= {user.Email } 
                 editable={false}
        //          editable={isEnableSignIn() ? false : true}
        //  inputStyle={{
        //    backgroundColor : isEnableSignIn() ? COLORS.white : COLORS.transparent
        //  }}

          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={icons.wallet}
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
          label="Status"
         value= {user.AccountStatus } 
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
                source={icons.star}
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
    {/* </View> */}



    </InputLayout>
  );
};

export default EditProfileScreen;

