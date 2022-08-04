import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectPremium} from '../Redux/premiumSlice';
import {selectCustomer} from '../Redux/customerSlice';
import {remove} from '../Redux/customerSlice';
import {UserAPI} from '../api/services';
import Loader from '../Constant/loader';
export default function OfflineCustomers() {
  const [showError, setShowError] = useState(false);

  const [showElection, setShowElection] = useState(false);
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomer);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(false);
  const { newReg,newRegID } = useSelector(state => state.customerReducer);

  console.log(newReg.length);

  const [offline] = useState([]);

  var task = {
    Name: 'One',
    Premium: '1000',
  };

  const send = () => {
    dispatch(remove());
  };

 


//   const SendCustomers = async () => {
//     // setLoading(true);

//     if (newReg.length > 0) {
//       for (let i = 0; i < newReg.length; i++) {
//         const index = newReg.indexOf(newReg[i]);
//         await UserAPI.AddCustomerOffline(newReg[i])
//           .then(res => {
//             if (res.data === 'Success') {
//               if (index > -1) {
//                  newReg.splice(index, 1);
//               }
//               setValue(true);

//               return;

//             //   setLoading(false);

//             //   alert('Sent');
//                         setValue(true);

//             }

//             // setLoading(false);


//             if (res.data === 'Data Exists') {
//               if (index > -1) {
//                  newReg.splice(index, 1);
//               }
//             //   setLoading(false);

//             //   alert('Data already Sent');
//               return;
//             } else {
//               console.log('NOT SENT Customers');
//             //   setLoading(false);
//               return;
//             }
//           })
//           .catch(e => {
//             console.log('ERROR OCCURED ON Customers', e);
//             // setLoading(false);
//             return;
//           });
//       }
//     } else {
//       console.log('NO DATA ON Customers ');
//     }
//   };


useEffect(() => {
    if (newReg.length == 0) {
      setShowElection(false);
      setShowError(true);
      return;
    } else {
      setShowElection(true);
      setShowError(false);
    }
  }, [value]);

const SendCustomers = async () => {
    setLoading(true);
	if (newReg.length > 0) {
		for (let i = 0; i < newReg.length; i++) {
			const index = newReg.indexOf(newReg[i]);
		 	await UserAPI
				.AddCustomerOffline(newReg[i])
				.then ((res) =>  {
					if (res.data === 'Success') {
						if (index > -1) {
							 newReg.splice(index, 1);
						}

                        setValue(true);

                        setLoading(false);
						return;

					}
					if (res.data === 'Data Exists') {
						if (index > -1) {
							 newReg.splice(index, 1);
						}

                        setValue(true);
                        setLoading(false);

						return;
					} else {
						console.log('NOT SENT');
                        setLoading(false);

						return;
					}
				})
				.catch((e) => {
					console.log('ERROR OCCURED', e);
                    setLoading(false);

					return;
				});
		}
	} else {
        setLoading(false);

		console.log('NO DATA');
	}
};

  return (
    <View style={styles.body}>
      {showError ? (
        <View style={styles.body}>
          <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 30}}>
            No data found
          </Text>

          {/* <TextInput placeholder="Name" />

          <Button title="Submit" onPress={send} /> */}
        </View>
      ) : null}

      {showElection ? (
        <View style={styles.body}>
          <Loader loading={loading} />

          <FlatList
            data={newReg}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.item}
                // onPress={() => {
                //   dispatch(setTaskID(item.ID));
                //   navigation.navigate('Task');
                // }}
              >
                <Text numberOfLines={1}>ID : {item.ID}</Text>

                <Text numberOfLines={1}>Customer ID : {item.District}</Text>

                <Text numberOfLines={1}>
                  Name: {item.FirstName + ' ' + item.LastName}
                </Text>

                {/* <Text >Date : {item.LogDate}</Text> */}
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <TouchableOpacity
            style={styles.button}
           
            onPress={SendCustomers}>
            <Text style={{color: '#fff'}}>Send</Text>
          </TouchableOpacity>

        
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    margin: 5,
  },
  subtitle: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
});
