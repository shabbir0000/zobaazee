import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"

const Emailconform = () => {
  return (
    <View style={tw`items-center justify-center bg-red-600 w-full h-10`}> 
       <Text style={tw`text-white`}>
        Email Not Verified. Tap The Banner To Verify Now
        </Text>  
    </View>
  )
}

export default Emailconform