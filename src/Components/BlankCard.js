import React from "react";
import { View, StyleSheet, Image,Text } from "react-native";
import Cardstyle from "../Styles/CardStyle";
import AppText from "./AppText";
import colors from "../config/colors";

function BlankCard({ text, total }) {
  return (
   


<View style={Cardstyle.card}>
              
<View style={Cardstyle.cardInfo}>



  <Text style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
          }}>
              
              {text}
          
          </Text>


          <Text
          style={{
            alignSelf: "center",
            fontSize: 40,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          
         {total}
        </Text>
  

        {/* <Image style={Cardstyle.bgImage}   source={{
            uri: photo
          }} /> */}

{/* <Image style={Cardstyle.bgImage}   source={photo} /> */}

 


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

export default BlankCard;
