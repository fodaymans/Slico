import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import { FONTS,COLORS } from '../Constant'

export default function TextButton({label,buttonContainerStyle,labelStyle,onPress}) {
    return (
       <TouchableOpacity
       style={{
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: COLORS.primary,
           ...buttonContainerStyle
           
       }}
       onPress={onPress}
       
       >
           <Text
           style={{
               color : COLORS.white,
               ...FONTS.h3,
               ...labelStyle
               
               
           }}
           
           >
               {label}

           </Text>

       </TouchableOpacity>
    )
}
