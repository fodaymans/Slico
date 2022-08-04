import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';

import styles from '../Styles/ProfileStyle';
import ButtonStyle from '../Styles/ButtonStyle';
import ImagePicker from 'react-native-image-crop-picker';
import {ScrollView} from 'react-native-gesture-handler';
import Loader from '../Constant/loader';

import {TextArea, Stack, Center, NativeBaseProvider} from 'native-base';
import {TextInput} from 'react-native-paper';
import SubmitButton from '../Components/Button/SubmitButton';

const HelpScreen = () => {
  const user = useSelector(selectUser);
  const [Fname, setFname] = useState(user.Fname);
 
  const {colors} = useTheme();
  
  const [errortext, setErrortext] = useState('');
  const [load, setLoading] = useState(false);

  const [text, setText] = React.useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  

  const [avatarBackground, setavatarBackground] = useState(null);

  

  const handleSubmitButton = () => {
    setErrortext('');

    if (!textAreaValue) {
      alert('Please Enter Message');
      return;
    }

    // Show Loader 
    setLoading(true);

    fetch('http://portal.slicoinsurance.com/slicoapi/api/Customer/SendMessage', {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        Username: user.Username,
        IDCode: user.IDCode,
        FirstName: user.Firstname,
        LastName: user.Lastname,
        Telephone: user.Telephone,
        Message: textAreaValue,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        if (responseJson == 'Success') {
            alert("Message Sent Successfully");
       
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={load} />

      <ScrollView>
        <View style={styles.headerContainer}>
          <ImageBackground
            style={styles.headerBackgroundImage}
            blurRadius={10}
            source={{
              uri: avatarBackground,
            }}>
            <View style={styles.headerColumn}>
             
              <Text style={styles.cardDetails}>Send Us Direct Message</Text>

              {errortext != '' ? (
                <Text style={styles.errorTextStyle1}> {errortext} </Text>
              ) : null}
            </View>
          </ImageBackground>

        
        </View>

        <View>
         
            <View style={styles.cardInfo2}>
              {/* <Text style={styles.cardTitle}> Message</Text> */}


              <Stack space={4} w="90%" >
                <TextArea
                  onChangeText={(textAreaValue) => setTextAreaValue(textAreaValue)}
                  placeholder="Message"
                />
              </Stack>
          
          </View>


<SubmitButton title="SEND"  onPress={() => handleSubmitButton()} />

         




        </View>
      </ScrollView>
    </View>
  );
};


// export default HelpScreen;

export default () => {
  return (
    <NativeBaseProvider>
     
        <HelpScreen />
    
    </NativeBaseProvider>
  );
};
