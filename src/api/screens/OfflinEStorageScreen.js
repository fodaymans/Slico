import React,{useState,useEffect} from 'react'
import {StyleSheet,Text, TouchableOpacity, View, FlatList,TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { selectPremium } from '../Redux/premiumSlice';
import { selectCustomer } from '../Redux/customerSlice';
import { remove  } from '../Redux/customerSlice';
export default function OfflinEStorageScreen() {
    const [showError, setShowError] = useState(false);

    const [showElection, setShowElection] = useState(false);
    const dispatch = useDispatch();
    const customer = useSelector(selectCustomer);


    // console.log(customer.FirstName,customer.ID)


    const [offline] = useState([]);

    var task = {
        Name : "One",
        Premium : "1000"
        
    }

    const send = () => {
        dispatch(remove());

    }

    const SendCustomers = () => {

    }

       
  useEffect(() => {

    if(customer.length == 0){
      setShowElection(false)
      setShowError(true)
      return
    }
    else{
      setShowElection(true)
      setShowError(false)
    }

    }, []);

    
  return (
   
    <View style={styles.body}>

    
    {showError ? (

<View style={styles.body}>
      <Text style={{alignSelf: 'center',marginTop : 30,fontSize: 30}}>No data found</Text>

    <TextInput 
    placeholder="Name"
    
    />

    <Button 
    title="Submit"
    onPress={send}
    
    />


      </View>
      ) : null} 

    

{showElection ? (
  <View style={styles.body}>

      <FlatList
        data={customer}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            // onPress={() => {
            //   dispatch(setTaskID(item.ID));
            //   navigation.navigate('Task');
            // }}
            >
            <Text
              
              numberOfLines={1}>
              ID : {item.ID}
            </Text>

            <Text
              
              numberOfLines={1}>
             Customer ID : {item.Depid}
            </Text>

            <Text
              
              numberOfLines={1}>
              Name: {item.FirstName}
            </Text>


            <Text >Date : {item.LogDate}</Text>

          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

<TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   dispatch(setTaskID(tasks.length + 1));
        //   navigation.navigate('Task');
        // }}>

        // onPress={() => {
        //   dispatch(removeNew());
        // }}

        onPress={SendCustomers}
        
        
        
        >
        <Text style={{color: "#fff"}}>Send</Text>
      </TouchableOpacity>

    
      
      {/* <View style={{flex: 1}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Clear"
            onPress={() => {
              dispatch(removeTasks());
            }}>
            <Icon name="trash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
       
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Send"
            onPress={sendAttend}>
            <Icon name="send" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View> */}

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