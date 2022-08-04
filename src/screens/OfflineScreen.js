import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../Constant/theme';
 
import { Dimensions } from "react-native";

export default function OfflineScreen({navigation}) {
  return (
     

<View>





<View
        style={{
          height: 40,
        //   paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
        alignContent: 'center',
        justifyContent:'center',
          margin: 10,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          borderColor: COLORS.black,
        }}>


<TouchableOpacity
    
    onPress ={
        () => navigation.navigate('OfflineCustomers')
      }
    >


<Text style={{alignSelf:'center',color:'#000'}}>Customers</Text>

</TouchableOpacity>
</View>






<View
        style={{
          height: 40,
        //   paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base1,
        alignContent: 'center',
        justifyContent:'center',
          margin: 10,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          borderColor: COLORS.black,
        }}>


<TouchableOpacity
    
    onPress ={
        () => navigation.navigate('OfflineDependant')
      }
    >
<Text style={{alignSelf:'center',color:'#000'}}>Dependants</Text>
</TouchableOpacity>

</View>






<View
        style={{
          height: 40,
        //   paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base1,
        alignContent: 'center',
        justifyContent:'center',
          margin: 10,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          borderColor: COLORS.black,
        }}>



<TouchableOpacity
    
    onPress ={
        () => navigation.navigate('OfflineWitness')
      }
    >

      <Text style={{alignSelf:'center',color:'#000'}}>Witness</Text>

</TouchableOpacity>
</View>






</View>    
  )
}