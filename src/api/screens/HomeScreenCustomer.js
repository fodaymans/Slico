import React, {useState, useEffect, dispatch} from 'react';
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
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {selectUser} from '../Redux/userSlice';
import Loader from '../Constant/loader';
import {useIsConnected} from 'react-native-offline';
import {checkConnected} from '../Constant/NetworkCheck';

const HomeScreenCustomer = ({navigation}) => {
  const theme = useTheme();
  const [val, setValue] = useState([]);

  const [username, setUsername] = useState('');

  const [total, setTotal] = useState('');
  const user = useSelector(selectUser);
  var tot = '';
  const [loading, setLoading] = useState(false);

  const [apiCallDone, setApiCallDone] = useState(false);
  const [shouldShowBalance, setShouldShowBalance] = useState(false);
  const [shouldShowZero, setShouldShowZero] = useState(false);


  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      //  hours + ':' + min + ':' + sec
      date + '/' + month + '/' + year,
    );
  }, [currentDate]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);

    axios
      .post(
        `http://portal.slicoinsurance.com/slicoapi/api/Customer/ViewPayment?id=${user.IDCode}`,
        {},
      )
      .then(({data}) => {
        setValue(data);

        if(data[0].Balance == null){
          setShouldShowZero(true)
         
        }
        else{
          setShouldShowBalance(true)
        }



      })
      .finally(() => {
        setLoading(false);
      });
  };

  // if(val.Balance == null){
  //   setValue(val.Balance = 0)
  // }

  if (val == 'NO PAYMENT MADE ') {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('../assets/backn.jpg')} />

        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Account ID : {user.IDCode}</Text>
            <Text style={styles.cardDetails}>
              Name : {user.Firstname} {user.Middlename} {user.Lastname}
            </Text>

            <Text style={styles.cardDetails}>
              Business Location : {user.BusinessLocation}
            </Text>
            <Text style={styles.cardDetails}>Address : {user.Address}</Text>
            <Text style={styles.cardDetails}>District :{user.District}</Text>
            <Text style={styles.cardDetails}>Region :{user.Region}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle1}>NO TRANSACTION RECORDED</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      // <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* <Image style={styles.bgImage}   source={require('../assets/backn.jpg')} /> */}
        <Image style={styles.bgImage} source={require('../assets/back.jpeg')} />

        <Loader loading={loading} />

        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

          <View style={styles.cardsWrapper}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={val}
              onRefresh={fetchUsers}
              refreshing={loading}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={styles.card}>
                      <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle1}>
                          Account ID : {user.IDCode}
                        </Text>
                        <Text style={styles.cardDetails}>
                          Name : {user.Firstname} {user.Middlename}{' '}
                          {user.Lastname}
                        </Text>

                        <Text style={styles.cardDetails}>
                          Location : {user.BusinessLocation}
                        </Text>
                        <Text style={styles.cardDetails}>
                          Address : {user.Address}
                        </Text>
                        <Text style={styles.cardDetails}>
                          District : {user.District}
                        </Text>
                        <Text style={styles.cardDetails}>
                          Region : {user.Region}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.card1}>
                      <View style={styles.cardInfo}>
                   
                        <Text style={styles.cardDetails}>
                          Outstanding Balance
                        </Text>

                        {shouldShowBalance ? (


                        <Text style={styles.cardDetails2}>
                          {'SLL ' + item.Balance}
                        </Text>

) : null} 

{shouldShowZero ? (


<Text style={styles.cardDetails2}>
  {'SLL ' + "0"}
</Text>

) : null} 



                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* </ScrollView> */}
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  bgImage: {
    flex: 1,

    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#dbdbdb' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#1bb4bf',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 180,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  cardDetails1: {
    fontSize: 18,
    color: 'green',
  },

  cardDetails2: {
    fontSize: 18,
    color: 'red',
  },

  card1: {
    height: 80,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },

  cardTitle1: {
    fontWeight: 'bold',
    fontSize: 17,
    alignContent: 'center',
  },

  cardTitle2: {
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center',
  },

  cardDetails: {
    fontSize: 18,
    color: '#444',
  },
});

export default HomeScreenCustomer;
