import React from "react";
import { View, StyleSheet, Image,Text } from "react-native";
import Cardstyle from "../Styles/CardStyle";
import AppText from "./AppText";
import colors from "../config/colors";

function ComCard({IDCode,Name,Telephone,Balance, Lastname,Middlename,BusinessLocation,RegDate,txt,...other }) {
  return (
   


<View style={Cardstyle.card}>
              
<View style={Cardstyle.cardInfo}>

  <Text style={Cardstyle.cardTitle}> 

   {IDCode}</Text>

  <Text style={Cardstyle.cardTitle}>
    {Name} 
  </Text>
  <Text style={Cardstyle.cardTitle}>
    {Telephone}
  </Text>
  <Text style={Cardstyle.cardTitle2}>
     {Balance}
  </Text>


        <AppText >{txt}</AppText>


</View>
</View>







  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    height: 800,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default ComCard;
