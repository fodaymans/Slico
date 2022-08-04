import React from 'react'
import { View, Text,TextInput,Dimensions } from 'react-native'
import {FONTS, SIZES, COLORS} from "../Constant";


const { width, height } = Dimensions.get("screen");
export default function FormInput({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    value,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    editable,
    maxLength,
    keyboardType="default",
    errorMsg=""

}) {








    return (
        <View style={{...containerStyle}}  >


                    <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                    <Text style={{color: COLORS.darkBlue, ...FONTS.body4}}>
                        {label}
                    </Text>

                    <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
                    
  </View>

                        {/* Text input */}

                        <View
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            paddingHorizontal : SIZES.padding,
                            marginTop: SIZES.base,
                            // width : width / 2,
                            borderRadius: SIZES.radius,
                            backgroundColor : COLORS.lightGray2
                        }}
                        
                        >

                            {prependComponent}
                            <TextInput
                            style={{
                                flex: 1,
                                ...inputStyle
                            }}
                            placeholder={placeholder}
                            placeholderTextColor={COLORS.darkBlue}
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyboardType}
                            color={COLORS.black}
                            maxLength={maxLength}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            editable={editable}

                            
                            />

                        
                            {appendComponent}

                        </View>
                    </View>
    )
}
