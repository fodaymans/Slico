// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator,Text,TouchableOpacity} from 'react-native';

const UploadLoader = (props) => {
  const {loadings,onPress,showModal,onRequestClose, ...attributes} = props;

  return (

    <Modal
      transparent={true}
      animationType={'none'}
      visible={loadings}
      onRequestClose={onRequestClose}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
          />
          <Text>Uploading Image</Text>
          <TouchableOpacity  onPress={onRequestClose}><Text>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    </Modal>
  );
};

export default UploadLoader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 150,
    width: 200,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});