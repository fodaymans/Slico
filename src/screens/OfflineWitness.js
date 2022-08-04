import React,{useState,useEffect} from 'react'
import {StyleSheet,Text, TouchableOpacity, View, FlatList,TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { UserAPI } from '../api/services';
import Loader from '../Constant/loader';
import { selectPremium } from '../Redux/premiumSlice';
import { selectWitness } from '../Redux/witnessSlice';
// import { remove  } from '../Redux/customerSlice';
export default function OfflineWitness(navigation) {
    const [showError, setShowError] = useState(false);

    const [showElection, setShowElection] = useState(false);
    const dispatch = useDispatch();
    const witness = useSelector(selectWitness);
    const { newWitness,newWitnessID } = useSelector(state => state.WitnessReducer);

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(false);

    // console.log("witn",newWitness)


    const [offline] = useState([]);

    var task = {
        Name : "One",
        Premium : "1000"
        
    }

    const send = () => {
        dispatch(remove());

    }


    useEffect((value) => {

        if(newWitness.length == 0){
          setShowElection(false)
          setShowError(true)
          return
        }
        else{
          setShowElection(true)
          setShowError(false)
        }
    
        }, [value]);

    const SendCustomers = async () => {
        setLoading(true);
        if (newWitness.length > 0) {
            for (let i = 0; i < newWitness.length; i++) {
                const index = newWitness.indexOf(newWitness[i]);
                 await UserAPI
                    .AddOfflineWitness(newWitness[i])
                    .then ((res) =>  {
                        if (res.data === 'successful') {
                            if (index > -1) {
                                newWitness.splice(index, 1);
                            }
                            // setValue(true);
    
                            
                            // alert("Sent")
                            setValue(true);

                            setLoading(false);
                            return;
                                    // console.log(res.data)
                        }
                        setLoading(false);
                            
                        if (res.data === 'Data Exists') {
                            if (index > -1) {
                                newWitness.splice(index, 1);
                            }
    
                            setValue(true);
                            setLoading(false);
    
                            return;
                        } 

                        if(res.data === 'Upload Customer'){
                            alert('Please Upload Customers')
                            setLoading(false);
                        }
                        
                        
                        
                        else {
                            console.log('NOT SENT',res.data);
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
      <Text style={{alignSelf: 'center',marginTop : 30,fontSize: 30}}>No data found</Text>

    {/* <TextInput 
    placeholder="Name"
    
    />

    <Button 
    title="Submit"
    onPress={send}
    /> */}


      </View>
      ) : null} 

    

{showElection ? (
  <View style={styles.body}>
          <Loader loading={loading} />

      <FlatList
        data={newWitness}
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
              ID : {item.DID}
            </Text>

            {/* <Text
              
              numberOfLines={1}>
             Customer ID : {item.Depid}
            </Text> */}

            <Text
              
              numberOfLines={1}>
              Name: {item.FirstName + " " + item.LastName }  
            </Text>


            <Text >Marketer ID : {item.ID}</Text>

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