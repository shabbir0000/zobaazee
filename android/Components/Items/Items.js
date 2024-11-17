import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Header from '../Ucomponents/Header'
import Search from './Search'

const Items = ({navigation}) => {
  return (
    <View style={[tw`flex flex-1`]}>
    <Header navigation={navigation} />
    <Search navigation={navigation}/>
    </View>
  )
}

export default Items