import { View, Text ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from "twrnc"

const Newsale = ({navigation}) => {
  return (
    <TouchableOpacity
    onPress={()=>{
         navigation.navigate("Items")
    }}
    >
    <View style={[tw`mt-30 w-80 h-50 self-center items-center justify-center rounded-md`,{backgroundColor:'#ffffff'}]}>
      <Image
      source={require("../../Images/plus.png")}
      style={tw`w-10 h-10`}
      />
      <Text style={tw`font-semibold text-2xl`}>SALE</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Newsale