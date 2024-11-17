import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from "react-native-vector-icons/SimpleLineIcons"
import tw from "twrnc"

const Screensheader = ({ name, onPress ,left }) => {
  return (

    <>
    <View style={[tw`flex h-20 flex-row   items-center`,{backgroundColor:"#ffffff"}]}> 
      <View style={tw`left-5  w-10  `}>
        <TouchableOpacity
          onPress={onPress}
        >
          {/* <LottieView style={tw`self-center  h-20`}
            source={require("../Images/101421-icon-arrow-left.json")}
            autoPlay
            loop={true}
            speed={0.5}
          /> */}
          <Ionicon name='arrow-left' size={20}/>
        </TouchableOpacity>
      </View>
      <View style={tw`items-center  self-center`}>
        <Text style={tw`text-center  left-${left} text-2xl font-extrabold`}>{name}</Text>
      </View>
      </View>
    </>
  )
}

export default Screensheader