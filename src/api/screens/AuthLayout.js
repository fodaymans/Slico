import React from "react";
import { View, Text, Image } from "react-native";

import { FONTS, SIZES, COLORS, icons, images } from "../Constant";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AuthLayout({
  title,
  subtitle,
  titleContainerStyle,
  children,
}) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* <Text></Text> */}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App ICON */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              height: 100,
              width: 200,
            }}
          />
        </View>

        {/* title */}

        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {children}
      </KeyboardAwareScrollView>
    </View>
  );
}
