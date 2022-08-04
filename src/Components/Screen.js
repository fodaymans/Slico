import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

function Screen({ children, style }) {
  return (

    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView>
      <View style={style}>{children}</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
  },
});

export default Screen;
