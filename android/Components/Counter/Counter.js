import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Header from '../Ucomponents/Header';
import Emailconform from './Emailconform';
import Newsale from './Newsale';
import Pendingsale from './Pendingsale';

const Counter = ({navigation}) => {
  return (
    <View style={[tw`flex flex-1`]}>
      <Header navigation={navigation} />
      <Emailconform />

      <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        
        contentContainerStyle={{ paddingBottom: 50 }}
        >

        <Newsale navigation={navigation} />
        <Pendingsale />
        <Pendingsale />
        <Pendingsale />
        <Pendingsale />
        <Pendingsale />
        <Pendingsale />

      </ScrollView>
    </View>
  );
};

export default Counter;
