import { View, Text ,Image} from 'react-native'
import React from 'react'
import tw from "twrnc"

const All = () => {
  return (
    <View>
      <View style={tw`items-center justify-center mt-40 `}>
        <Image
          source={require('../../Images/noitem.png')}
          style={tw`h-28 w-28 `}
        />

        <Text style={tw`text-gray-400 mt-2`}>No Item Please Add Item</Text>

       
      </View>
    </View>
  )
}

export default All